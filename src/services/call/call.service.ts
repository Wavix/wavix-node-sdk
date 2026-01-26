import WebSocket from "ws"
import ServiceBase from "../service.base"
import {
  CallResponse,
  TerminateResponse,
  StartCall,
  CallEvent,
  StartCallErrorResponse,
  CollectDTMFOptions,
  TTSOptions,
  TTSPayload,
  PlayAudioPayload,
  TransferOptions
} from "./call.interface"

interface Callback {
  onEvent: Array<(event: string) => void>
}

class Call extends ServiceBase {
  static reconnectInterval = 1000

  private ws: WebSocket | null = null
  private callback: Callback = {
    onEvent: []
  }

  public connect(): Promise<void | Error> {
    const url = new URL(this.baseURL)

    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(`wss://${url.host}/sip?appid=${this.options.appid}`)

      this.ws.onmessage = event => {
        this.callback.onEvent.forEach(cb => cb(event.data.toString()))
      }

      this.ws.onclose = () => {
        setTimeout(this.connect.bind(this), Call.reconnectInterval)
      }

      this.ws.onerror = error => {
        reject(new Error(error?.message || "Calls websocket error"))
      }

      this.ws.onopen = () => {
        resolve()
      }
    })
  }

  public onEvent(callback: (event: CallEvent) => void): void {
    const onEventCallback = (event: string) => {
      try {
        const eventPayload = JSON.parse(event.toString()) as CallEvent
        callback(eventPayload)
      } catch (e) {
        console.error("Error in JSON parse: ", e)
        console.error("Event: ", event.toString())
      }
    }

    this.callback.onEvent.push(onEventCallback)
  }

  public getList(): Promise<CallResponse | ErrorResponse> {
    return this.http.get<CallResponse>("/v1/calls")
  }

  public getCall(callUUID: string): Promise<{ success: boolean; call: CallEvent } | ErrorResponse> {
    return this.http.get(`/v1/calls/${callUUID}`)
  }

  public start(payload: StartCall): Promise<(CallEvent & StartCallErrorResponse) | ErrorResponse> {
    return this.http.post<CallEvent & StartCallErrorResponse, StartCall>("/v1/calls", {
      ...payload,
      recording: payload.recording || false,
      voicemail_detection: payload.voicemail_detection || false
    })
  }

  public playAudio(callUUID: string, url: string): Promise<BasicSuccess> {
    return this.http.post<BasicSuccess, PlayAudioPayload>(`/v1/calls/${callUUID}/play`, {
      audio_file: url
    })
  }

  public stopAudio(callUUID: string): Promise<BasicSuccess> {
    return this.http.delete<BasicSuccess>(`/v1/calls/${callUUID}/audio`)
  }

  /**
   * Voice list
   * https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
   */
  public tts(callUUID: string, text: string, options?: TTSOptions): Promise<BasicSuccess> {
    return this.http.post<BasicSuccess, TTSPayload>(`/v1/calls/${callUUID}/tts`, {
      text,
      voice: options?.voice || "Joey",
      ...options
    })
  }

  public transfer(callUUID: string, options: TransferOptions): Promise<BasicSuccess> {
    return this.http.post<BasicSuccess, TransferOptions>(`/v1/calls/${callUUID}/transfer`, {
      from: options.from,
      to: options.to,
      call_recording: options.call_recording || false,
      dual_channel_recording: options.dual_channel_recording,
      machine_detection: options.machine_detection || false,
      ...(options.a_playback_audio && { a_playback_audio: options.a_playback_audio }),
      ...(options.b_playback_audio && { b_playback_audio: options.b_playback_audio })
    })
  }

  public collectDTMF(callUUID: string, options: CollectDTMFOptions): Promise<BasicSuccess> {
    return this.http.post<BasicSuccess, CollectDTMFOptions>(`/v1/calls/${callUUID}/collect`, options)
  }

  public updateCall(callUUID: string, tag: string): Promise<BasicSuccess> {
    return this.http.patch<BasicSuccess, { tag: string }>(`/v1/calls/${callUUID}`, { tag })
  }

  public hangup(callUUID: string): Promise<TerminateResponse> {
    return this.http.delete<TerminateResponse>(`/v1/calls/${callUUID}`)
  }

  public async getRecord(callUUID: string): Promise<ArrayBuffer | ErrorResponse> {
    return await this.http.get(`/v1/recordings/${callUUID}`, { responseType: "arraybuffer" })
  }
}

export { Call }

import WebSocket from "ws"
import ServiceBase from "../service.base"
import {
  CallsResponse,
  CallResponse,
  TerminateResponse,
  StartCallRequest,
  StartCallErrorResponse,
  CallEvent,
  PlayAudioPayload,
  TransferOptions,
  AnswerCallRequest,
  AnswerCallResponse,
  UpdateCallRequest
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

  public getList(): Promise<CallsResponse | ErrorResponse> {
    return this.http.get<CallsResponse>("/v2/calls")
  }

  public get(callUUID: string): Promise<CallResponse | ErrorResponse> {
    return this.http.get<CallResponse>(`/v2/calls/${callUUID}`)
  }

  public start(payload: StartCallRequest): Promise<CallEvent | StartCallErrorResponse> {
    return this.http.post<CallEvent | StartCallErrorResponse, StartCallRequest>("/v2/calls", {
      from: payload.from,
      to: payload.to,
      callback_url: payload.callback_url,
      recording: payload.recording ?? false,
      voicemail_detection: payload.voicemail_detection ?? false,
      ...(payload.timeout !== undefined && { timeout: payload.timeout }),
      ...(payload.tag && { tag: payload.tag })
    })
  }

  public answer(callUUID: string, options?: AnswerCallRequest): Promise<AnswerCallResponse | ErrorResponse> {
    return this.http.post<AnswerCallResponse, AnswerCallRequest>(`/v2/calls/${callUUID}/answer`, {
      call_recording: options?.call_recording ?? false,
      call_transcription: options?.call_transcription ?? false
    })
  }

  public updateTag(callUUID: string, tag: string): Promise<BasicSuccess | ErrorResponse> {
    return this.http.patch<BasicSuccess, UpdateCallRequest>(`/v2/calls/${callUUID}`, { tag })
  }

  public playAudio(callUUID: string, url: string): Promise<BasicSuccess | ErrorResponse> {
    return this.http.post<BasicSuccess, PlayAudioPayload>(`/v2/calls/${callUUID}/play`, {
      audio_file: url
    })
  }

  /**
   * @deprecated This method uses V1 API and may be removed in future versions
   */
  public transfer(callUUID: string, options: TransferOptions): Promise<BasicSuccess | ErrorResponse> {
    return this.http.post<BasicSuccess, TransferOptions>(`/v1/call/${callUUID}/transfer`, {
      from: options.from,
      to: options.to,
      call_recording: options.call_recording ?? false,
      dual_channel_recording: options.dual_channel_recording,
      machine_detection: options.machine_detection ?? false,
      ...(options.a_playback_audio && { a_playback_audio: options.a_playback_audio }),
      ...(options.b_playback_audio && { b_playback_audio: options.b_playback_audio })
    })
  }

  public hangup(callUUID: string): Promise<TerminateResponse | ErrorResponse> {
    return this.http.delete<TerminateResponse>(`/v2/calls/${callUUID}`)
  }

  public async getRecord(callUUID: string): Promise<ArrayBuffer | ErrorResponse> {
    return await this.http.get(`/v1/recordings/${callUUID}`, { responseType: "arraybuffer" })
  }
}

export { Call }

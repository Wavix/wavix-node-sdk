export type CallContext = "outbound" | "inbound"
export type EventType =
  | "call_setup"
  | "ringing"
  | "answered"
  | "completed"
  | "busy"
  | "cancelled"
  | "rejected"
  | "early_media"
  | "on_call_event"
  | "failed"
  | "transfer"

export interface Call {
  id: string
  context: CallContext
  from: string
  to: string
  started_at: Date
  answered_at: Date | null
  is_recording: boolean
}

export interface CallResponse {
  calls: Array<Call>
}

export interface TerminateResponse {
  success: boolean
}

export interface StartCall {
  from: string
  to: string
  callback_url: string
  recording?: boolean
  voicemail_detection?: boolean
  timeout?: number
  tag?: string
}

export interface CallEvent {
  uuid: string
  direction: "inbound" | "outbound"
  event_type: EventType
  event_time: Date
  event_payload: CallEventPayload | null
  from: string
  to: string
  call_started: Date
  call_answered: Date | null
  call_completed: Date | null
  machine_detected: boolean
  tag: string
}

type CallEventPayload = AudioEventPayload | CollectCompletedEventPayload

interface AudioEventPayload {
  type: "audio"
  payload: {
    playback_id: string
    status: "started" | "completed"
  }
}

interface CollectCompletedEventPayload {
  type: "collect_completed"
  payload: {
    digits: string
    reason: "collected" | "timeout"
  }
}

export interface StartCallErrorResponse {
  success: boolean
  message: string
  error?: {
    [field: string]: string
  }
}

export type SocketEventType = "connect" | "event" | "disconnect"


export interface CollectDTMFOptions {
  min_digits?: number
  max_digits?: number
  timeout?: number
  termination_character?: string
  audio: {
    url: string
    stop_on_keypress?: boolean
  }
  callback_url?: string
}

export interface PlayAudioPayload {
  audio_file: string
}

export interface TTSOptions {
  voice?: string
  delay_before_playing?: number
  max_repeat_count?: number
}

export interface TTSPayload extends TTSOptions {
  text: string
}

export interface TransferOptions {
  from: string
  to: string
  call_recording?: boolean
  dual_channel_recording?: boolean
  machine_detection?: boolean
  a_playback_audio?: string
  b_playback_audio?: string
}

export type CallDirection = "outbound" | "inbound";
export type EventType = "call_setup" | "ringing" | "early_media" | "answered" | "completed" | "busy" | "cancelled" | "rejected" | "on_call_event";
export interface AudioEventPayload {
    type: "audio";
    payload: {
        status: "started" | "completed";
    };
}
export interface CallEvent {
    uuid: string;
    direction: CallDirection;
    event_type: EventType;
    event_time: Date;
    event_payload: AudioEventPayload | null;
    from: string;
    to: string;
    call_started: Date;
    call_answered: Date | null;
    call_completed: Date | null;
    machine_detected: boolean;
    tag: string | null;
}
export interface CallsResponse {
    success: boolean;
    calls: Array<CallEvent>;
}
export interface CallResponse {
    success: boolean;
    call: CallEvent;
}
export interface StartCallRequest {
    from: string;
    to: string;
    callback_url: string;
    recording?: boolean;
    voicemail_detection?: boolean;
    timeout?: number;
    tag?: string;
}
export interface StartCallErrorResponse {
    success: boolean;
    message: string;
    errors?: {
        [field: string]: string;
    };
}
export interface TerminateResponse {
    success: boolean;
}
export interface AnswerCallRequest {
    call_recording?: boolean;
    call_transcription?: boolean;
}
export interface AnswerCallResponse {
    success: boolean;
}
export interface UpdateCallRequest {
    tag: string;
}
export type SocketEventType = "connect" | "event" | "disconnect";
export interface PlayAudioPayload {
    audio_file: string;
}
export interface TransferOptions {
    from: string;
    to: string;
    call_recording?: boolean;
    dual_channel_recording?: boolean;
    machine_detection?: boolean;
    a_playback_audio?: string;
    b_playback_audio?: string;
}
//# sourceMappingURL=call.interface.d.ts.map
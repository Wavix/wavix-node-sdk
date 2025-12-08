import ServiceBase from "../service.base";
import { CallResponse, TerminateResponse, StartCall, CallEvent, StartCallErrorResponse, CollectDTMFOptions, TTSOptions, TransferOptions } from "./call.interface";
declare class Call extends ServiceBase {
    static reconnectInterval: number;
    private ws;
    private callback;
    connect(): Promise<void | Error>;
    onEvent(callback: (event: CallEvent) => void): void;
    getList(): Promise<CallResponse | ErrorResponse>;
    getCall(callUUID: string): Promise<{
        success: boolean;
        call: CallEvent;
    } | ErrorResponse>;
    start(payload: StartCall): Promise<(CallEvent & StartCallErrorResponse) | ErrorResponse>;
    playAudio(callUUID: string, url: string): Promise<BasicSuccess>;
    stopAudio(callUUID: string): Promise<BasicSuccess>;
    /**
     * Voice list
     * https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
     */
    tts(callUUID: string, text: string, options?: TTSOptions): Promise<BasicSuccess>;
    transfer(callUUID: string, options: TransferOptions): Promise<BasicSuccess>;
    collectDTMF(callUUID: string, options: CollectDTMFOptions): Promise<BasicSuccess>;
    updateCall(callUUID: string, tag: string): Promise<BasicSuccess>;
    hangup(callUUID: string): Promise<TerminateResponse>;
    getRecord(callUUID: string): Promise<ArrayBuffer | ErrorResponse>;
}
export { Call };
//# sourceMappingURL=call.service.d.ts.map
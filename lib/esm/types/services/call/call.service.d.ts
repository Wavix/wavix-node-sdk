import ServiceBase from "../service.base";
import { CallsResponse, CallResponse, TerminateResponse, StartCallRequest, StartCallErrorResponse, CallEvent, TransferOptions, AnswerCallRequest, AnswerCallResponse } from "./call.interface";
declare class Call extends ServiceBase {
    static reconnectInterval: number;
    private ws;
    private callback;
    connect(): Promise<void | Error>;
    onEvent(callback: (event: CallEvent) => void): void;
    getList(): Promise<CallsResponse | ErrorResponse>;
    get(callUUID: string): Promise<CallResponse | ErrorResponse>;
    start(payload: StartCallRequest): Promise<CallEvent | StartCallErrorResponse>;
    answer(callUUID: string, options?: AnswerCallRequest): Promise<AnswerCallResponse | ErrorResponse>;
    updateTag(callUUID: string, tag: string): Promise<BasicSuccess | ErrorResponse>;
    playAudio(callUUID: string, url: string): Promise<BasicSuccess | ErrorResponse>;
    /**
     * @deprecated This method uses V1 API and may be removed in future versions
     */
    transfer(callUUID: string, options: TransferOptions): Promise<BasicSuccess | ErrorResponse>;
    hangup(callUUID: string): Promise<TerminateResponse | ErrorResponse>;
    getRecord(callUUID: string): Promise<ArrayBuffer | ErrorResponse>;
}
export { Call };
//# sourceMappingURL=call.service.d.ts.map
import ServiceBase from "../service.base";
import { RequestTranscriptionByCallIdResponse, SearchCallsBySpecificKeywordsOrPhrasesRequestBody, SearchCallsBySpecificKeywordsOrPhrasesResponseItem, TranscribeCallByIdPayload } from "./speech-analytics.interface";
declare class SpeechAnalytics extends ServiceBase {
    requestTranscriptionByCallId(id: string): Promise<ErrorResponse | RequestTranscriptionByCallIdResponse>;
    transcribeCallById(id: string, payload: TranscribeCallByIdPayload): Promise<unknown>;
    searchCallsBySpecificKeywordsOrPhrases(body: SearchCallsBySpecificKeywordsOrPhrasesRequestBody): Promise<ErrorResponse | PaginatedResponse<SearchCallsBySpecificKeywordsOrPhrasesResponseItem, "items">>;
}
export { SpeechAnalytics };
//# sourceMappingURL=speech-analytics.service.d.ts.map
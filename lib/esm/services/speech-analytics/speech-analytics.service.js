import ServiceBase from "../service.base";
class SpeechAnalytics extends ServiceBase {
    requestTranscriptionByCallId(id) {
        return this.http.get(`/v1/cdr/${id}/transcription`);
    }
    transcribeCallById(id, payload) {
        return this.http.put(`/v1/cdr/${id}/retranscribe`, payload);
    }
    searchCallsBySpecificKeywordsOrPhrases(body) {
        return this.http.post(`/v1/cdr`, body);
    }
}
export { SpeechAnalytics };

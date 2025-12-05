"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechAnalytics = void 0;
const service_base_1 = __importDefault(require("../service.base"));
class SpeechAnalytics extends service_base_1.default {
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
exports.SpeechAnalytics = SpeechAnalytics;

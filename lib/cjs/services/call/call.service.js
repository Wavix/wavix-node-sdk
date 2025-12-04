"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
const ws_1 = __importDefault(require("ws"));
const service_base_1 = __importDefault(require("../service.base"));
class Call extends service_base_1.default {
    constructor() {
        super(...arguments);
        this.ws = null;
        this.callback = {
            onEvent: []
        };
    }
    connect() {
        const url = new URL(this.baseURL);
        return new Promise((resolve, reject) => {
            this.ws = new ws_1.default(`wss://${url.host}/sip?appid=${this.options.appid}`);
            this.ws.onmessage = event => {
                this.callback.onEvent.forEach(cb => cb(event.data.toString()));
            };
            this.ws.onclose = () => {
                setTimeout(this.connect.bind(this), Call.reconnectInterval);
            };
            this.ws.onerror = error => {
                reject(new Error((error === null || error === void 0 ? void 0 : error.message) || "Calls websocket error"));
            };
            this.ws.onopen = () => {
                resolve();
            };
        });
    }
    onEvent(callback) {
        const onEventCallback = (event) => {
            try {
                const eventPayload = JSON.parse(event.toString());
                callback(eventPayload);
            }
            catch (e) {
                console.error("Error in JSON parse: ", e);
                console.error("Event: ", event.toString());
            }
        };
        this.callback.onEvent.push(onEventCallback);
    }
    getList() {
        return this.http.get("/v2/calls");
    }
    get(callUUID) {
        return this.http.get(`/v2/calls/${callUUID}`);
    }
    start(payload) {
        var _a, _b;
        return this.http.post("/v2/calls", Object.assign(Object.assign({ from: payload.from, to: payload.to, callback_url: payload.callback_url, recording: (_a = payload.recording) !== null && _a !== void 0 ? _a : false, voicemail_detection: (_b = payload.voicemail_detection) !== null && _b !== void 0 ? _b : false }, (payload.timeout !== undefined && { timeout: payload.timeout })), (payload.tag && { tag: payload.tag })));
    }
    answer(callUUID, options) {
        var _a, _b;
        return this.http.post(`/v2/calls/${callUUID}/answer`, {
            call_recording: (_a = options === null || options === void 0 ? void 0 : options.call_recording) !== null && _a !== void 0 ? _a : false,
            call_transcription: (_b = options === null || options === void 0 ? void 0 : options.call_transcription) !== null && _b !== void 0 ? _b : false
        });
    }
    updateTag(callUUID, tag) {
        return this.http.patch(`/v2/calls/${callUUID}`, { tag });
    }
    playAudio(callUUID, url) {
        return this.http.post(`/v2/calls/${callUUID}/play`, {
            audio_file: url
        });
    }
    /**
     * @deprecated This method uses V1 API and may be removed in future versions
     */
    transfer(callUUID, options) {
        var _a, _b;
        return this.http.post(`/v1/call/${callUUID}/transfer`, Object.assign(Object.assign({ from: options.from, to: options.to, call_recording: (_a = options.call_recording) !== null && _a !== void 0 ? _a : false, dual_channel_recording: options.dual_channel_recording, machine_detection: (_b = options.machine_detection) !== null && _b !== void 0 ? _b : false }, (options.a_playback_audio && { a_playback_audio: options.a_playback_audio })), (options.b_playback_audio && { b_playback_audio: options.b_playback_audio })));
    }
    hangup(callUUID) {
        return this.http.delete(`/v2/calls/${callUUID}`);
    }
    getRecord(callUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(`/v1/recordings/${callUUID}`, { responseType: "arraybuffer" });
        });
    }
}
exports.Call = Call;
Call.reconnectInterval = 1000;

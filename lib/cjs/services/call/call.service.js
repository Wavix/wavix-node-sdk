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
        return this.http.get("/v1/calls");
    }
    getCall(callUUID) {
        return this.http.get(`/v1/calls/${callUUID}`);
    }
    start(payload) {
        return this.http.post("/v1/calls", Object.assign(Object.assign({}, payload), { recording: payload.recording || false, voicemail_detection: payload.voicemail_detection || false }));
    }
    playAudio(callUUID, url) {
        return this.http.post(`/v1/calls/${callUUID}/play`, {
            audio_file: url
        });
    }
    stopAudio(callUUID) {
        return this.http.delete(`/v1/calls/${callUUID}/audio`);
    }
    /**
     * Voice list
     * https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
     */
    tts(callUUID, text, options) {
        return this.http.post(`/v1/calls/${callUUID}/tts`, Object.assign({ text, voice: (options === null || options === void 0 ? void 0 : options.voice) || "Joey" }, options));
    }
    transfer(callUUID, options) {
        return this.http.post(`/v1/calls/${callUUID}/transfer`, Object.assign(Object.assign({ from: options.from, to: options.to, call_recording: options.call_recording || false, dual_channel_recording: options.dual_channel_recording, machine_detection: options.machine_detection || false }, (options.a_playback_audio && { a_playback_audio: options.a_playback_audio })), (options.b_playback_audio && { b_playback_audio: options.b_playback_audio })));
    }
    collectDTMF(callUUID, options) {
        return this.http.post(`/v1/calls/${callUUID}/collect`, options);
    }
    updateCall(callUUID, tag) {
        return this.http.patch(`/v1/calls/${callUUID}`, { tag });
    }
    hangup(callUUID) {
        return this.http.delete(`/v1/calls/${callUUID}`);
    }
    getRecord(callUUID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(`/v1/recordings/${callUUID}`, { responseType: "arraybuffer" });
        });
    }
}
exports.Call = Call;
Call.reconnectInterval = 1000;

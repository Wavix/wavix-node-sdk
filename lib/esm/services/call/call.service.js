import WebSocket from "ws";
import ServiceBase from "../service.base";
class Call extends ServiceBase {
    static reconnectInterval = 1000;
    ws = null;
    callback = {
        onEvent: []
    };
    connect() {
        const url = new URL(this.baseURL);
        return new Promise((resolve, reject) => {
            this.ws = new WebSocket(`wss://${url.host}/sip?appid=${this.options.appid}`);
            this.ws.onmessage = event => {
                this.callback.onEvent.forEach(cb => cb(event.data.toString()));
            };
            this.ws.onclose = () => {
                setTimeout(this.connect.bind(this), Call.reconnectInterval);
            };
            this.ws.onerror = error => {
                reject(new Error(error?.message || "Calls websocket error"));
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
        return this.http.post("/v1/calls", {
            ...payload,
            recording: payload.recording || false,
            voicemail_detection: payload.voicemail_detection || false
        });
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
        return this.http.post(`/v1/calls/${callUUID}/tts`, {
            text,
            voice: options?.voice || "Joey",
            ...options
        });
    }
    transfer(callUUID, options) {
        return this.http.post(`/v1/calls/${callUUID}/transfer`, {
            from: options.from,
            to: options.to,
            call_recording: options.call_recording || false,
            dual_channel_recording: options.dual_channel_recording,
            machine_detection: options.machine_detection || false,
            ...(options.a_playback_audio && { a_playback_audio: options.a_playback_audio }),
            ...(options.b_playback_audio && { b_playback_audio: options.b_playback_audio })
        });
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
    async getRecord(callUUID) {
        return await this.http.get(`/v1/recordings/${callUUID}`, { responseType: "arraybuffer" });
    }
}
export { Call };

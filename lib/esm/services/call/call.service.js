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
        return this.http.get("/v2/calls");
    }
    get(callUUID) {
        return this.http.get(`/v2/calls/${callUUID}`);
    }
    start(payload) {
        return this.http.post("/v2/calls", {
            from: payload.from,
            to: payload.to,
            callback_url: payload.callback_url,
            recording: payload.recording ?? false,
            voicemail_detection: payload.voicemail_detection ?? false,
            ...(payload.timeout !== undefined && { timeout: payload.timeout }),
            ...(payload.tag && { tag: payload.tag })
        });
    }
    answer(callUUID, options) {
        return this.http.post(`/v2/calls/${callUUID}/answer`, {
            call_recording: options?.call_recording ?? false,
            call_transcription: options?.call_transcription ?? false
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
        return this.http.post(`/v1/call/${callUUID}/transfer`, {
            from: options.from,
            to: options.to,
            call_recording: options.call_recording ?? false,
            dual_channel_recording: options.dual_channel_recording,
            machine_detection: options.machine_detection ?? false,
            ...(options.a_playback_audio && { a_playback_audio: options.a_playback_audio }),
            ...(options.b_playback_audio && { b_playback_audio: options.b_playback_audio })
        });
    }
    hangup(callUUID) {
        return this.http.delete(`/v2/calls/${callUUID}`);
    }
    async getRecord(callUUID) {
        return await this.http.get(`/v1/recordings/${callUUID}`, { responseType: "arraybuffer" });
    }
}
export { Call };

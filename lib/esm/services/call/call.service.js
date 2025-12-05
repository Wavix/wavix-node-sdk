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
        return this.http.get("/v1/call");
    }
    start(payload) {
        return this.http.post("/v1/call", {
            ...payload,
            call_recording: payload.call_recording || false,
            machine_detection: payload.machine_detection || false
        });
    }
    playAudio(callUUID, url, options) {
        return this.http.post(`/v1/call/${callUUID}/play`, {
            audio_file: url,
            timeout_before_playing: options?.timeout_before_playing || 0,
            timeout_between_playing: options?.timeout_between_playing || 0
        });
    }
    /**
     * Voice list
     * https://docs.aws.amazon.com/polly/latest/dg/voicelist.html
     */
    tts(callUUID, text, options) {
        return this.http.post(`/v1/call/${callUUID}/tts`, {
            text,
            voice: options?.voice || "Joey",
            delay_before_playing: options?.delay_before_playing || 0,
            max_repeat_count: options?.max_repeat_count || 0
        });
    }
    transfer(callUUID, options) {
        return this.http.post(`/v1/call/${callUUID}/transfer`, {
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
        return this.http.post(`/v1/call/${callUUID}/collect`, options);
    }
    hangup(callUUID) {
        return this.http.delete(`/v1/call/${callUUID}`);
    }
    async getRecord(callUUID) {
        return await this.http.get(`/v1/recordings/${callUUID}`, { responseType: "arraybuffer" });
    }
}
export { Call };

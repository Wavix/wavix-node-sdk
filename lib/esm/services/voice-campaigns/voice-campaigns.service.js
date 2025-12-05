import ServiceBase from "../service.base";
class VoiceCampaigns extends ServiceBase {
    async triggerScenario(payload) {
        return this.http.post(`/v1/voice-campaigns`, payload);
    }
}
export { VoiceCampaigns };

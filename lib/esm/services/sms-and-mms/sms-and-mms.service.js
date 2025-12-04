import ServiceBase from "../service.base";
class SmsAndMms extends ServiceBase {
    async getAccountSenderIds() {
        return this.http.get("/v2/messages/sender_ids");
    }
    async getSenderIdRestrictions(queryParameters) {
        const queryString = this.http.paramsToQueryString(queryParameters);
        return this.http.get(`/v2/messages/sender_ids/restrictions?${queryString}`);
    }
    async getAccountMessages(queryParameters) {
        const queryString = this.http.paramsToQueryString(queryParameters);
        return this.http.get(`/v2/messages?${queryString}`);
    }
    async createSenderId(payload) {
        return this.http.post(`/v2/messages/sender_ids`, payload);
    }
    async deleteSenderId(id) {
        return this.http.delete(`/v2/messages/sender_ids/${id}`);
    }
    async sendMessage(payload) {
        return this.http.post(`/v2/messages`, payload);
    }
    async sendHighVolumeTrafficMessage(payload) {
        return this.http.post("/v2/messages/async", payload);
    }
    async optOutSmsMessagesPhoneNumber(payload) {
        return this.http.post("/v2/messages/opt_outs", payload);
    }
}
export { SmsAndMms };

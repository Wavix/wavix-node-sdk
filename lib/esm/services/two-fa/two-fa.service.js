import ServiceBase from "../service.base";
class TwoFa extends ServiceBase {
    async createVerification(payload) {
        return this.http.post("/v1/two-fa/verification", payload);
    }
    async resendVerificationCode(sessionId, payload) {
        return this.http.post(`/v1/two-fa/verification/${sessionId}`, payload);
    }
    async validateCode(sessionId, payload) {
        return this.http.post(`/v1/two-fa/verification/${sessionId}/check`, payload);
    }
    async cancelVerification(sessionId) {
        return this.http.patch(`/v1/two-fa/verification/${sessionId}/cancel`, {});
    }
    async getServiceVerifications(serviceId, params) {
        const queryString = this.http.paramsToQueryString(params);
        return this.http.get(`/v1/two-fa/service/${serviceId}/sessions?${queryString}`);
    }
    async getServiceVerificationEvents(sessionId) {
        return this.http.get(`/v1/two-fa/session/${sessionId}/events`);
    }
}
export { TwoFa };

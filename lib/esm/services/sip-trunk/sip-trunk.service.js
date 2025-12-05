import ServiceBase from "../service.base";
class SipTrunk extends ServiceBase {
    async getAccountSipTrunks(queryParameters) {
        const queryString = this.http.paramsToQueryString(queryParameters);
        return this.http.get(`/v1/trunks${queryString ? `?${queryString}` : ""}`);
    }
    async getSipTrunkConfiguration(sipTrunkId) {
        return this.http.get(`/v1/trunks/${sipTrunkId}`);
    }
    async createSipTrunk(payload) {
        return this.http.post("/v1/trunks", payload);
    }
    async updateSipTrunk(sipTrunkId, payload) {
        return this.http.put(`/v1/trunks/${sipTrunkId}`, payload);
    }
    async deleteSipTrunk(sipTrunkId) {
        return this.http.delete(`/v1/trunks/${sipTrunkId}`);
    }
}
export { SipTrunk };

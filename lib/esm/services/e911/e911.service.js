import ServiceBase from "../service.base";
class E911 extends ServiceBase {
    async getList(params) {
        const queryString = this.http.paramsToQueryString(params);
        return this.http.get(`/v1/e911-records${queryString ? `?${queryString}` : ""}`);
    }
    async validateAddress(payload) {
        return this.http.post(`/v1/e911-records/validate-address`, payload);
    }
    async create(payload) {
        return this.http.post("/v1/e911-records", payload);
    }
    async delete(params) {
        const queryString = this.http.paramsToQueryString(params);
        return this.http.delete(`/v1/e911-records?${queryString}`);
    }
}
export { E911 };

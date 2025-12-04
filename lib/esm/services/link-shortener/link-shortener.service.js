import ServiceBase from "../service.base";
class LinkShortener extends ServiceBase {
    async getShortLinksMetrics(params) {
        const queryString = this.http.paramsToQueryString(params);
        return this.http.get(`/v1/short-links/metrics?${queryString}`);
    }
    async createShortLink(payload) {
        return this.http.post("/v1/short-links", payload);
    }
}
export { LinkShortener };

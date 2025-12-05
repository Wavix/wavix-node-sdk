import ServiceBase from "../service.base";
class Cdr extends ServiceBase {
    async list(queryParameters) {
        const queryString = this.http.paramsToQueryString(queryParameters);
        return await this.http.get(`/v1/cdr?${queryString}`);
    }
    async get(uuid) {
        return await this.http.get(`/v1/cdr/${uuid}`);
    }
}
export { Cdr };

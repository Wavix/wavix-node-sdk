import ServiceBase from "../service.base";
import FormData from "form-data";
class Did extends ServiceBase {
    async getAccountDids(queryParameters) {
        const queryString = this.http.paramsToQueryString(queryParameters);
        return this.http.get(`/v1/mydids${queryString ? `?${queryString}` : ""}`);
    }
    async updateDidDestinations(payload) {
        return this.http.post("/v1/mydids/update-destinations", payload);
    }
    async uploadDidDocument(payload) {
        const { did_ids, doc_id, file } = payload;
        const formData = new FormData();
        formData.append("did_ids", did_ids.join(","));
        formData.append("doc_id", String(doc_id));
        formData.append("doc_attachment", file.data, file.name);
        return this.http.post("/v1/mydids/papers", formData, {
            headers: formData.getHeaders()
        });
    }
    async returnDidsToStock(ids) {
        const queryString = ids.map((id, index) => `ids[${index}]=${id}`).join("&");
        return this.http.delete(`/v1/mydids?${queryString}`);
    }
}
export { Did };

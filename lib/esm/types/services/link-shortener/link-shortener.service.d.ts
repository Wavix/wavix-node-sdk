import ServiceBase from "../service.base";
import { CreateShortLinkPayload, CreateShortLinkResponse, GetShortLinksMetricsQueryParameters, GetShortLinksMetricsResponse } from "./link-shortener.interface";
declare class LinkShortener extends ServiceBase {
    getShortLinksMetrics(params: GetShortLinksMetricsQueryParameters): Promise<ErrorResponse | GetShortLinksMetricsResponse>;
    createShortLink(payload: CreateShortLinkPayload): Promise<ErrorResponse | CreateShortLinkResponse>;
}
export { LinkShortener };
//# sourceMappingURL=link-shortener.service.d.ts.map
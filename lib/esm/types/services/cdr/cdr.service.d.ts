import ServiceBase from "../service.base";
import { CdrResponse, QueryParameters, CdrResponseDetails } from "./cdr.interface";
declare class Cdr extends ServiceBase {
    list(queryParameters: QueryParameters): Promise<PaginatedResponse<CdrResponse> | ErrorResponse>;
    get(uuid: string): Promise<CdrResponseDetails | ErrorResponse>;
}
export { Cdr };
//# sourceMappingURL=cdr.service.d.ts.map
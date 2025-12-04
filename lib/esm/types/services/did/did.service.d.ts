import ServiceBase from "../service.base";
import { DidListItem, GetAccountDidsQueryParameters, ReturnDidsToStockResponse, UpdateDidDestinationsPayload, UpdateDidDestinationsResponse, UploadDidDocumentPayload, UploadDidDocumentResponse } from "./did.interface";
declare class Did extends ServiceBase {
    getAccountDids(queryParameters?: GetAccountDidsQueryParameters): Promise<ErrorResponse | PaginatedResponse<DidListItem, "items">>;
    updateDidDestinations(payload: UpdateDidDestinationsPayload): Promise<ErrorResponse | UpdateDidDestinationsResponse>;
    uploadDidDocument(payload: UploadDidDocumentPayload): Promise<ErrorResponse | UploadDidDocumentResponse>;
    returnDidsToStock(ids: Array<number>): Promise<ErrorResponse | ReturnDidsToStockResponse>;
}
export { Did };
//# sourceMappingURL=did.service.d.ts.map
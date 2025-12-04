import ServiceBase from "../service.base";
import { CreateE911Payload, CreateE911Response, DeleteE911QueryParameters, DeleteE911Response, E911ListItem, GetListQueryParameters, ValidateAddressPayload, ValidateAddressResponse } from "./e911.interface";
declare class E911 extends ServiceBase {
    getList(params?: GetListQueryParameters): Promise<ErrorResponse | PaginatedResponse<E911ListItem, "items">>;
    validateAddress(payload: ValidateAddressPayload): Promise<ErrorResponse | ValidateAddressResponse>;
    create(payload: CreateE911Payload): Promise<ErrorResponse | CreateE911Response>;
    delete(params: DeleteE911QueryParameters): Promise<ErrorResponse | DeleteE911Response>;
}
export { E911 };
//# sourceMappingURL=e911.service.d.ts.map
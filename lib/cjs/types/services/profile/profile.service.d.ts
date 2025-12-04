import ServiceBase from "../service.base";
import { GetAccountSettingsResponse, GetCustomerInfoResponse, UpdateCustomerInfoPayload } from "./profile.interface";
declare class Profile extends ServiceBase {
    getCustomerInfo(): Promise<ErrorResponse | GetCustomerInfoResponse>;
    getAccountSettings(): Promise<ErrorResponse | GetAccountSettingsResponse>;
    updateCustomerInfo(payload: UpdateCustomerInfoPayload): Promise<ErrorResponse | GetCustomerInfoResponse>;
}
export { Profile };
//# sourceMappingURL=profile.service.d.ts.map
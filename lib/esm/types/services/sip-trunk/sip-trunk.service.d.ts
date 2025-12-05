import ServiceBase from "../service.base";
import { CreateSipTrunkPayload, DeleteSipTrunkResponse, GetAccountSipTrunksQueryParameters, SipTrunkConfigurationItem, SipTrunkListItem, UpdateSipTrunkPayload } from "./sip-trunk.interface";
declare class SipTrunk extends ServiceBase {
    getAccountSipTrunks(queryParameters?: GetAccountSipTrunksQueryParameters): Promise<ErrorResponse | PaginatedResponse<SipTrunkListItem, "sip_trunks">>;
    getSipTrunkConfiguration(sipTrunkId: number): Promise<ErrorResponse | SipTrunkConfigurationItem>;
    createSipTrunk(payload: CreateSipTrunkPayload): Promise<ErrorResponse | SipTrunkConfigurationItem>;
    updateSipTrunk(sipTrunkId: number, payload: UpdateSipTrunkPayload): Promise<ErrorResponse | SipTrunkConfigurationItem>;
    deleteSipTrunk(sipTrunkId: number): Promise<ErrorResponse | DeleteSipTrunkResponse>;
}
export { SipTrunk };
//# sourceMappingURL=sip-trunk.service.d.ts.map
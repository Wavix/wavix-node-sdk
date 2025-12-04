import ServiceBase from "../service.base";
import { AccountMessageListItem, CreateSenderIdPayload, DeleteSenderIdResponse, GetAccountMessagesQueryParameters, GetAccountSenderIdsResponse, GetSenderIdRestrictionsQueryParameters, GetSenderIdRestrictionsResponse, OptOutSmsMessagesPhoneNumberPayload, OptOutSmsMessagesPhoneNumberResponse, SendHighVolumeTrafficMessagePayload, SendHighVolumeTrafficMessageResponse, SendMessagePayload, SendMessageResponse, SenderIdListItem } from "./sms-and-mms.interface";
declare class SmsAndMms extends ServiceBase {
    getAccountSenderIds(): Promise<ErrorResponse | GetAccountSenderIdsResponse>;
    getSenderIdRestrictions(queryParameters: GetSenderIdRestrictionsQueryParameters): Promise<ErrorResponse | GetSenderIdRestrictionsResponse>;
    getAccountMessages(queryParameters: GetAccountMessagesQueryParameters): Promise<ErrorResponse | PaginatedResponse<AccountMessageListItem, "items">>;
    createSenderId(payload: CreateSenderIdPayload): Promise<ErrorResponse | SenderIdListItem>;
    deleteSenderId(id: string): Promise<ErrorResponse | DeleteSenderIdResponse>;
    sendMessage(payload: SendMessagePayload): Promise<ErrorResponse | SendMessageResponse>;
    sendHighVolumeTrafficMessage(payload: SendHighVolumeTrafficMessagePayload): Promise<ErrorResponse | SendHighVolumeTrafficMessageResponse>;
    optOutSmsMessagesPhoneNumber(payload: OptOutSmsMessagesPhoneNumberPayload): Promise<ErrorResponse | OptOutSmsMessagesPhoneNumberResponse>;
}
export { SmsAndMms };
//# sourceMappingURL=sms-and-mms.service.d.ts.map
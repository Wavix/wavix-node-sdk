import ServiceBase from "../service.base";
import { CreateTwoFaVerificationPayload, CreateTwoFaVerificationResponse, GetServiceVerificationEventsResponse, GetServiceVerificationsQueryParameters, GetServiceVerificationsResponse, ResendTwoFaVerificationCodePayload, ResendTwoFaVerificationCodeResponse, ValidateTwoFaCodePayload, ValidateTwoFaCodeResponse } from "./two-fa.interface";
declare class TwoFa extends ServiceBase {
    createVerification(payload: CreateTwoFaVerificationPayload): Promise<ErrorResponse | CreateTwoFaVerificationResponse>;
    resendVerificationCode(sessionId: string, payload: ResendTwoFaVerificationCodePayload): Promise<ErrorResponse | ResendTwoFaVerificationCodeResponse>;
    validateCode(sessionId: string, payload: ValidateTwoFaCodePayload): Promise<ErrorResponse | ValidateTwoFaCodeResponse>;
    cancelVerification(sessionId: string): Promise<unknown>;
    getServiceVerifications(serviceId: string, params: GetServiceVerificationsQueryParameters): Promise<ErrorResponse | GetServiceVerificationsResponse>;
    getServiceVerificationEvents(sessionId: string): Promise<ErrorResponse | GetServiceVerificationEventsResponse>;
}
export { TwoFa };
//# sourceMappingURL=two-fa.service.d.ts.map
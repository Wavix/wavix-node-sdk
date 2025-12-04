import ServiceBase from "../service.base";
import type { NumberValidationType, NumberValidationBody, NumberValidationResponse, NumberValidationAsyncResponse } from "./number-validation.interface";
declare class NumberValidation extends ServiceBase {
    validateSingle(number: string, type: NumberValidationType): Promise<NumberValidationBody | ErrorResponse>;
    validateBatchSync(numbers: Array<string>, type: NumberValidationType): Promise<NumberValidationResponse | ErrorResponse>;
    validateBatchAsync(numbers: Array<string>, type: NumberValidationType): Promise<NumberValidationAsyncResponse | ErrorResponse>;
    getValidationResult(uuid: string): Promise<NumberValidationResponse | ErrorResponse>;
}
export { NumberValidation };
//# sourceMappingURL=number-validation.service.d.ts.map
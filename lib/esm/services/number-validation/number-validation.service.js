import ServiceBase from "../service.base";
class NumberValidation extends ServiceBase {
    validateSingle(number, type) {
        return this.http.get(`/v1/validation?phone_number=${number}&type=${type}`);
    }
    validateBatchSync(numbers, type) {
        return this.http.post("/v1/validation", {
            phone_numbers: numbers,
            async: false,
            type
        });
    }
    validateBatchAsync(numbers, type) {
        return this.http.post("/v1/validation", {
            phone_numbers: numbers,
            async: true,
            type
        });
    }
    getValidationResult(uuid) {
        return this.http.get(`/v1/validation/${uuid}`);
    }
}
export { NumberValidation };

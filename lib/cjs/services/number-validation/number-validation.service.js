"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValidation = void 0;
const service_base_1 = __importDefault(require("../service.base"));
class NumberValidation extends service_base_1.default {
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
exports.NumberValidation = NumberValidation;

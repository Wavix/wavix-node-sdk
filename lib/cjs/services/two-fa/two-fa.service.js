"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFa = void 0;
const service_base_1 = __importDefault(require("../service.base"));
class TwoFa extends service_base_1.default {
    createVerification(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post("/v1/two-fa/verification", payload);
        });
    }
    resendVerificationCode(sessionId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post(`/v1/two-fa/verification/${sessionId}`, payload);
        });
    }
    validateCode(sessionId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post(`/v1/two-fa/verification/${sessionId}/check`, payload);
        });
    }
    cancelVerification(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.patch(`/v1/two-fa/verification/${sessionId}/cancel`, {});
        });
    }
    getServiceVerifications(serviceId, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = this.http.paramsToQueryString(params);
            return this.http.get(`/v1/two-fa/service/${serviceId}/sessions?${queryString}`);
        });
    }
    getServiceVerificationEvents(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get(`/v1/two-fa/session/${sessionId}/events`);
        });
    }
}
exports.TwoFa = TwoFa;

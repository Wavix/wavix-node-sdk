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
exports.SmsAndMms = void 0;
const service_base_1 = __importDefault(require("../service.base"));
class SmsAndMms extends service_base_1.default {
    getAccountSenderIds() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.get("/v2/messages/sender_ids");
        });
    }
    getSenderIdRestrictions(queryParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = this.http.paramsToQueryString(queryParameters);
            return this.http.get(`/v2/messages/sender_ids/restrictions?${queryString}`);
        });
    }
    getAccountMessages(queryParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = this.http.paramsToQueryString(queryParameters);
            return this.http.get(`/v2/messages?${queryString}`);
        });
    }
    createSenderId(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post(`/v2/messages/sender_ids`, payload);
        });
    }
    deleteSenderId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.delete(`/v2/messages/sender_ids/${id}`);
        });
    }
    sendMessage(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post(`/v2/messages`, payload);
        });
    }
    sendHighVolumeTrafficMessage(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post("/v2/messages/async", payload);
        });
    }
    optOutSmsMessagesPhoneNumber(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post("/v2/messages/opt_outs", payload);
        });
    }
}
exports.SmsAndMms = SmsAndMms;

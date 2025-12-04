"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const service_base_1 = __importDefault(require("../service.base"));
class Profile extends service_base_1.default {
    getCustomerInfo() {
        return this.http.get("/v1/profile");
    }
    getAccountSettings() {
        return this.http.get("/v1/profile/config");
    }
    updateCustomerInfo(payload) {
        return this.http.put("/v1/profile", payload);
    }
}
exports.Profile = Profile;

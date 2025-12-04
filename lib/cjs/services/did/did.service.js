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
exports.Did = void 0;
const service_base_1 = __importDefault(require("../service.base"));
const form_data_1 = __importDefault(require("form-data"));
class Did extends service_base_1.default {
    getAccountDids(queryParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = this.http.paramsToQueryString(queryParameters);
            return this.http.get(`/v1/mydids${queryString ? `?${queryString}` : ""}`);
        });
    }
    updateDidDestinations(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.http.post("/v1/mydids/update-destinations", payload);
        });
    }
    uploadDidDocument(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { did_ids, doc_id, file } = payload;
            const formData = new form_data_1.default();
            formData.append("did_ids", did_ids.join(","));
            formData.append("doc_id", String(doc_id));
            formData.append("doc_attachment", file.data, file.name);
            return this.http.post("/v1/mydids/papers", formData, {
                headers: formData.getHeaders()
            });
        });
    }
    returnDidsToStock(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = ids.map((id, index) => `ids[${index}]=${id}`).join("&");
            return this.http.delete(`/v1/mydids?${queryString}`);
        });
    }
}
exports.Did = Did;

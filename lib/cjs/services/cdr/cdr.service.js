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
exports.Cdr = void 0;
const service_base_1 = __importDefault(require("../service.base"));
class Cdr extends service_base_1.default {
    list(queryParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryString = this.http.paramsToQueryString(queryParameters);
            return yield this.http.get(`/v1/cdr?${queryString}`);
        });
    }
    get(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.http.get(`/v1/cdr/${uuid}`);
        });
    }
}
exports.Cdr = Cdr;

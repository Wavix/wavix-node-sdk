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
const axios_1 = __importDefault(require("axios"));
class Http {
    constructor(baseURL, appid) {
        this.baseURL = baseURL;
        this.appid = appid;
        this.instance = axios_1.default.create({
            baseURL,
            headers: {
                Accept: "application/json"
            }
        });
    }
    get(path, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.instance.get(this.getUrl(path), config);
                return response.data;
            }
            catch (error) {
                return this.errorHandler(error);
            }
        });
    }
    post(path, payload, config) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.instance.post(this.getUrl(path), this.parsePayload(payload), config);
                return response.data;
            }
            catch (error) {
                return this.errorHandler(error);
            }
        });
    }
    put(path, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.instance.put(this.getUrl(path), this.parsePayload(payload));
                return response.data;
            }
            catch (error) {
                return this.errorHandler(error);
            }
        });
    }
    patch(path, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.instance.patch(this.getUrl(path), this.parsePayload(payload));
                return response.data;
            }
            catch (error) {
                return this.errorHandler(error);
            }
        });
    }
    delete(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.instance.delete(this.getUrl(path));
                return response.data;
            }
            catch (error) {
                return this.errorHandler(error);
            }
        });
    }
    paramsToQueryString(params) {
        if (!params || !Object.keys(params).length)
            return "";
        const queryPrams = this.parsePayload(params);
        return Object.keys(queryPrams)
            .map(key => `${String(key)}=${queryPrams[key]}`)
            .join("&");
    }
    parsePayload(params) {
        const queryPrams = Object.assign({}, params);
        // Convert Date object to ISO string
        for (const key in queryPrams) {
            if (queryPrams[key] instanceof Date) {
                const date = queryPrams[key];
                queryPrams[key] = this.formatDate(date);
            }
        }
        return queryPrams;
    }
    getUrl(path) {
        return `${this.baseURL}${path}${path.includes("?") ? "&" : "?"}appid=${this.appid}`;
    }
    errorHandler(error) {
        var _a, _b;
        if (axios_1.default.isAxiosError(error)) {
            const serverError = error;
            if (serverError && serverError.response) {
                return { success: false, message: ((_b = (_a = serverError.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "" };
            }
        }
        return { success: false, message: "" };
    }
    formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
}
exports.default = Http;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("../http"));
class ServiceBase {
    constructor(options) {
        this.baseURL = "https://api.wavix.com";
        this.options = options;
        if (options.baseURL) {
            this.baseURL = options.baseURL;
        }
        this.http = new http_1.default(this.baseURL, options.appid);
    }
}
exports.default = ServiceBase;

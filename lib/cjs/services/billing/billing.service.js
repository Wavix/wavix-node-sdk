"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Billing = void 0;
const service_base_1 = __importDefault(require("../service.base"));
class Billing extends service_base_1.default {
    getAccountTransactions(queryParameters) {
        const queryString = this.http.paramsToQueryString(queryParameters);
        return this.http.get(`/v1/billing/transactions?${queryString}`);
    }
    getAccountInvoices(queryParameters) {
        const queryString = this.http.paramsToQueryString(queryParameters);
        return this.http.get(`/v1/billing/invoices${queryString ? `?${queryString}` : ""}`);
    }
    downloadInvoiceById(id) {
        return this.http.get(`/v1/billing/invoices/${id}`);
    }
}
exports.Billing = Billing;

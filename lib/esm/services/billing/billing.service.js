import ServiceBase from "../service.base";
class Billing extends ServiceBase {
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
export { Billing };

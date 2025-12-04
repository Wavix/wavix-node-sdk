import ServiceBase from "../service.base";
import { AccountInvoicesItem, AccountTransactionsItem, GetAccountInvoicesQueryParameters, GetAccountTransactionsQueryParameters } from "./billing.interface";
declare class Billing extends ServiceBase {
    getAccountTransactions(queryParameters: GetAccountTransactionsQueryParameters): Promise<ErrorResponse | PaginatedResponse<AccountTransactionsItem, "transactions">>;
    getAccountInvoices(queryParameters?: GetAccountInvoicesQueryParameters): Promise<ErrorResponse | PaginatedResponse<AccountInvoicesItem, "invoices">>;
    downloadInvoiceById(id: number): Promise<unknown>;
}
export { Billing };
//# sourceMappingURL=billing.service.d.ts.map
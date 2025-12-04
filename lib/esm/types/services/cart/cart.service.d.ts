import ServiceBase from "../service.base";
import { AddDidNumbersToCartPayload, AddDidNumbersToCartResponse, CheckoutPayload, CheckoutResponse, GetCartContentResponse } from "./cart.interface";
declare class Cart extends ServiceBase {
    getCartContent(): Promise<ErrorResponse | GetCartContentResponse>;
    addDidNumbersToCart(payload: AddDidNumbersToCartPayload): Promise<ErrorResponse | AddDidNumbersToCartResponse>;
    checkoutDidNumbers(payload: CheckoutPayload): Promise<ErrorResponse | CheckoutResponse>;
}
export { Cart };
//# sourceMappingURL=cart.service.d.ts.map
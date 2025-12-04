import ServiceBase from "../service.base";
class Cart extends ServiceBase {
    getCartContent() {
        return this.http.get("/v1/buy/cart");
    }
    addDidNumbersToCart(payload) {
        return this.http.put("/v1/buy/cart", payload);
    }
    checkoutDidNumbers(payload) {
        return this.http.post("/v1/buy/cart/checkout", payload);
    }
}
export { Cart };

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const service_base_1 = __importDefault(require("../service.base"));
class Cart extends service_base_1.default {
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
exports.Cart = Cart;

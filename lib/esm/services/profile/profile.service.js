import ServiceBase from "../service.base";
class Profile extends ServiceBase {
    getCustomerInfo() {
        return this.http.get("/v1/profile");
    }
    getAccountSettings() {
        return this.http.get("/v1/profile/config");
    }
    updateCustomerInfo(payload) {
        return this.http.put("/v1/profile", payload);
    }
}
export { Profile };

import Http from "../http";
class ServiceBase {
    options;
    http;
    baseURL = "https://api.wavix.com";
    constructor(options) {
        this.options = options;
        if (options.baseURL) {
            this.baseURL = options.baseURL;
        }
        this.http = new Http(this.baseURL, options.appid);
    }
}
export default ServiceBase;

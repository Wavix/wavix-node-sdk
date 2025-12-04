import Http from "../http";
import { Options } from "../interface";
declare abstract class ServiceBase {
    readonly options: Options;
    readonly http: Http;
    protected baseURL: string;
    constructor(options: Options);
}
export default ServiceBase;
//# sourceMappingURL=service.base.d.ts.map
import { AxiosRequestConfig } from "axios";
declare class Http {
    private baseURL;
    private appid;
    private instance;
    constructor(baseURL: string, appid: string);
    get<T>(path: string, config?: AxiosRequestConfig): Promise<T | ErrorResponse>;
    post<T, U>(path: string, payload?: U, config?: AxiosRequestConfig): Promise<T | ErrorResponse>;
    put<T, U>(path: string, payload?: U): Promise<T | ErrorResponse>;
    patch<T, U>(path: string, payload?: U): Promise<T | ErrorResponse>;
    delete<T>(path: string): Promise<T | ErrorResponse>;
    paramsToQueryString(params?: object): string;
    private parsePayload;
    private getUrl;
    private errorHandler;
    private formatDate;
}
export default Http;
//# sourceMappingURL=http.d.ts.map
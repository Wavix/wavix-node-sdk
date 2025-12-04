import axios from "axios";
class Http {
    baseURL;
    appid;
    instance;
    constructor(baseURL, appid) {
        this.baseURL = baseURL;
        this.appid = appid;
        this.instance = axios.create({
            baseURL,
            headers: {
                Accept: "application/json"
            }
        });
    }
    async get(path, config) {
        try {
            const response = await this.instance.get(this.getUrl(path), config);
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    async post(path, payload, config) {
        try {
            const response = await this.instance.post(this.getUrl(path), this.parsePayload(payload), config);
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    async put(path, payload) {
        try {
            const response = await this.instance.put(this.getUrl(path), this.parsePayload(payload));
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    async patch(path, payload) {
        try {
            const response = await this.instance.patch(this.getUrl(path), this.parsePayload(payload));
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    async delete(path) {
        try {
            const response = await this.instance.delete(this.getUrl(path));
            return response.data;
        }
        catch (error) {
            return this.errorHandler(error);
        }
    }
    paramsToQueryString(params) {
        if (!params || !Object.keys(params).length)
            return "";
        const queryPrams = this.parsePayload(params);
        return Object.keys(queryPrams)
            .map(key => `${String(key)}=${queryPrams[key]}`)
            .join("&");
    }
    parsePayload(params) {
        const queryPrams = { ...params };
        // Convert Date object to ISO string
        for (const key in queryPrams) {
            if (queryPrams[key] instanceof Date) {
                const date = queryPrams[key];
                queryPrams[key] = this.formatDate(date);
            }
        }
        return queryPrams;
    }
    getUrl(path) {
        return `${this.baseURL}${path}${path.includes("?") ? "&" : "?"}appid=${this.appid}`;
    }
    errorHandler(error) {
        if (axios.isAxiosError(error)) {
            const serverError = error;
            if (serverError && serverError.response) {
                return { success: false, message: serverError.response?.data?.message || "" };
            }
        }
        return { success: false, message: "" };
    }
    formatDate(date) {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
}
export default Http;

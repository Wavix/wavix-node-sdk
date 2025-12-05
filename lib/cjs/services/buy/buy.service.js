"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buy = void 0;
const service_base_1 = __importDefault(require("../service.base"));
class Buy extends service_base_1.default {
    getCountriesList() {
        return this.http.get("/v1/buy/countries");
    }
    getRegionsList(countryId) {
        return this.http.get(`/v1/buy/countries/${countryId}/regions`);
    }
    getCountryCitiesList(countryId) {
        return this.http.get(`/v1/buy/countries/${countryId}/cities`);
    }
    getRegionCitiesList(countryId, regionId) {
        return this.http.get(`/v1/buy/countries/${countryId}/regions/${regionId}/cities`);
    }
    getAvailableToPurchaseDids(countryId, cityId, queryParameters) {
        const queryString = this.http.paramsToQueryString(queryParameters);
        return this.http.get(`/v1/buy/countries/${countryId}/cities/${cityId}/dids${queryString ? `?${queryString}` : ""}`);
    }
}
exports.Buy = Buy;

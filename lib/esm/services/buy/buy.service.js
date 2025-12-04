import ServiceBase from "../service.base";
class Buy extends ServiceBase {
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
export { Buy };

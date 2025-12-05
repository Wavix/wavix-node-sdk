import { Did } from "services/cart/cart.interface";
import ServiceBase from "../service.base";
import { GetAvailableToPurchaseDidsQueryParameters, GetCountriesListResponse, GetCountryCitiesListResponse, GetRegionCitiesListResponse, GetRegionsListResponse } from "./buy.interface";
declare class Buy extends ServiceBase {
    getCountriesList(): Promise<ErrorResponse | GetCountriesListResponse>;
    getRegionsList(countryId: number): Promise<ErrorResponse | GetRegionsListResponse>;
    getCountryCitiesList(countryId: number): Promise<ErrorResponse | GetCountryCitiesListResponse>;
    getRegionCitiesList(countryId: number, regionId: number): Promise<ErrorResponse | GetRegionCitiesListResponse>;
    getAvailableToPurchaseDids(countryId: number, cityId: number, queryParameters?: GetAvailableToPurchaseDidsQueryParameters): Promise<ErrorResponse | PaginatedResponse<Did, "dids">>;
}
export { Buy };
//# sourceMappingURL=buy.service.d.ts.map
import { Response } from "../models/response.model";

export interface HoustonService {
    getType():string;
    getRules(): Promise<Response>;
}
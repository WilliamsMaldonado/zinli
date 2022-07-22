import { inject, injectable } from "inversify";
import { Response } from "../models/response.model";
import { HoustonService } from "../services/houston.service";
import { SERVICES } from "../utils/constants";

@injectable()
export class HoustonController {
    private serviceMap: Map<string, HoustonService>;

    constructor(
        @inject(SERVICES.HoustonServiceS3) private serviceS3: HoustonService,
        @inject(SERVICES.HoustonServiceSSM) private serviceSSM: HoustonService
        ) {
            this.serviceMap = new Map<string, HoustonService>([
                [serviceS3.getType(), serviceS3],
                [serviceSSM.getType(), serviceSSM]
            ]);
        }

    public eventHandler(): Promise<Response> {
        return new Promise((resolve, reject) => {
            const type:string = process.env.type !== undefined ? process.env.type : "s3";
            this.serviceMap.get(type)?.getRules().then((res: Response) => {
                return resolve(res);
            }).catch(err => {
                console.error("ERROR: ", err);
                reject(err);
            });
        })
    }
}
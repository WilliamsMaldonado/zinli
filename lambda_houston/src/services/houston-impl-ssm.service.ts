import { injectable } from "inversify";
import { body, Response } from "../models/response.model";
import { TYPES } from "../utils/constants";
import { HoustonService } from "./houston.service";
import { SSM } from "aws-sdk";

@injectable()
export class HoustonImplSSMService implements HoustonService {
    getType(): string {
        return TYPES.SSM;
    }

    getRules(): Promise<Response> {
        return new Promise((resolve, reject) => {
            const ssm = new SSM({region: process.env.AWS_REGION});
            const params = {Name: '/rules/rules', WithDecryption: false}
            ssm.getParameter(params, (err, data) => {
                if (err) {
                    return reject(err);
                } else {
                    if (data.Parameter === undefined || data.Parameter.Value === undefined) {
                        return reject("ERROR JSON FROM SSM");
                    }
                    const bodyRes:body = JSON.parse(data.Parameter !== undefined ? data.Parameter.Value !== undefined ? data.Parameter.Value : "" : "");
                    const response:Response = new Response(bodyRes);
                    return resolve(response);
                }
            })
        });
    }

}
import { injectable } from "inversify";
import { body, Response } from "../models/response.model";
import { TYPES } from "../utils/constants";
import { HoustonService } from "./houston.service";
import { S3 } from "aws-sdk";

@injectable()
export class HoustonImplS3Service implements HoustonService {
    getType(): string {
        return TYPES.S3;
    }

    getRules(): Promise<Response> {
        return new Promise((resolve, reject) => {
            const s3 = new S3({apiVersion: '2006-03-01'});
            const params = {Bucket: 'rules', Key: 'rules.json', ResponseContentType: 'application/json'};
            s3.getObject(params, (err , data) => {
                if (err) {
                    reject(err);
                } else {
                    if (data.Body === undefined) {
                        reject("ERROR JSON FROM S3");
                    }
                    const bodyRes:body = JSON.parse(data.Body !== undefined ? data.Body.toString('utf-8') : "");
                    const response:Response = new Response(bodyRes);
                    resolve(response);
                }
            })

        });
    }

}
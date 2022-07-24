import { injectable } from "inversify";
import { body, Response } from "../models/response.model";
import { TYPES } from "../utils/constants";
import { HoustonService } from "./houston.service";
import { DynamoDB } from "aws-sdk";

@injectable()
export class HoustonImplDyanamoService implements HoustonService {
    getType(): string {
        return TYPES.DYNAMO;
    }

    getRules(): Promise<Response> {
        return new Promise((resolve, reject) => {
            const dynamo = new DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
            const params:DynamoDB.DocumentClient.GetItemInput = {TableName: 'rules', Key: {id: 'rules'}};
            dynamo.get(params, (err , data) => {
                if (err) {
                    return reject(err);
                } else {
                    if (data.Item === undefined) {
                        return reject("ERROR JSON FROM S3");
                    }
                    const bodyRes:body = JSON.parse(data.Item !== undefined ? String(data.Item) : "");
                    const response:Response = new Response(bodyRes);
                    return resolve(response);
                }
            })

        });
    }

}
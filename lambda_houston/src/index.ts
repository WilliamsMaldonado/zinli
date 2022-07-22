import "reflect-metadata"
import { HoustonController } from "./controllers/houston.controller"
import { AppContainer } from "./inversify.config"
import { Response } from "./models/response.model";
import { CONTROLLERS } from "./utils/constants"

export function handler(event: any) {
    return new Promise((resolve, reject) => {
        const controller: HoustonController = AppContainer.get<HoustonController>(CONTROLLERS.HoustonController);
        controller
            .eventHandler()
            .then((response: Response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
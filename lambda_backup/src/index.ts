import "reflect-metadata"
import { BackupController } from "./controllers/backup.controller";
import { AppContainer } from "./inversify.config"
import { Response } from "./models/response.model";
import { CONTROLLERS } from "./utils/constants"

export function handler(event: any) {
    return new Promise((resolve, reject) => {
        const controller: BackupController = AppContainer.get<BackupController>(CONTROLLERS.BackupController);
        controller
            .eventHandler(event)
            .then((response: Response) => {
                resolve(response);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
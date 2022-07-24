import { inject, injectable } from "inversify";
import { Response } from "../models/response.model";
import { BackupService } from "../services/backup.service";
import { KinesisService } from "../services/kinesis.service";
import { SERVICES } from "../utils/constants";

@injectable()
export class BackupController {

    constructor(
        @inject(SERVICES.BackupService) private backupService: BackupService,
        @inject(SERVICES.KinesisService) private kinesisService: KinesisService,
    ){}

    public eventHandler(event: any): Promise<Response> {
        return new Promise((resolve, reject) => {
            this.backupService.saveRecords(event).then((res: string) => {
                const response: Response = new Response({mensage: res});
                this.kinesisService.saveRecordLambda(JSON.stringify(event), JSON.stringify(response));
                return resolve(response);
            }).catch(err => {
                this.kinesisService.saveRecordLambda(JSON.stringify(event), JSON.stringify(err));
                return reject(err);
            })
        })
    }
}
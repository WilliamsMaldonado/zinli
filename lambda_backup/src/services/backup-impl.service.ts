import { Buffer } from "buffer";
import { record, Records } from "../models/records.model";
import { BackupService } from "./backup.service";
import { S3 } from "aws-sdk";
import { injectable } from "inversify";

@injectable()
export class BackupServiceImpl implements BackupService {
    saveRecords(event: any): Promise<string> {
        return new Promise((resolve, reject) => {
            const records: Records = this.getRecords(event);
            const s3 = new S3({apiVersion: '2006-03-01'});
            const now = new Date();
            const s3suffix = `/${now.toLocaleDateString()}/${event.invocationId}.txt`
            const params = {Body: JSON.stringify(records), Bucket: 'analytics', Key: s3suffix}
            s3.putObject(params, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`Successfully processed ${event.records}`)
                }
            });
        })
    }

    private getRecords(event: any): Records {
        const records: Records = new Records(new Array());
        event.records.forEach((element: { [x: string]: any; }) => {
            // Kinesis data base64
            const buff = Buffer.from(element.data, 'base64');
            const str = buff.toString('utf-8');
            if (this.filterRecord(str)) {
                const record: record = {
                    recordId: element.recordId,
                    result: "ok",
                    data: element.data
                };
                records.records.push(record);
            }
        });
        return records;
    }

    private filterRecord(record: string): boolean {
        // con este string se puden realizar filtros de acuerdo a la necesidad, si vienen de dynamo o rds o lambda
        console.log(record);
        return true;
    }
}

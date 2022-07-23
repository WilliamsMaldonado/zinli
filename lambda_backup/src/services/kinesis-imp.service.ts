import { KinesisService } from "./kinesis.service";
import { Kinesis } from "aws-sdk";
import { RecordPut } from "../models/kinesisput.model";
import { injectable } from "inversify";

@injectable()
export class KinesisserviceImpl implements KinesisService {
    saveRecordLambda(request: string, response: string): void {
        const kinesis:Kinesis = new Kinesis({apiVersion: '2013-12-02'});
        const record:RecordPut = new RecordPut(request, response);
        kinesis.putRecord({StreamName: 'nameStream', Data: record, PartitionKey: JSON.stringify(record).length.toString()}, (err, data) => {
            if (err) {
                console.error("ERROR: ", err);
            } else {
                console.log("OK: ", data);
            }
        })
    }

}
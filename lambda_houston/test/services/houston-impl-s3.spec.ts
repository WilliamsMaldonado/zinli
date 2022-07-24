import "reflect-metadata"
import {HoustonService} from "../../src/services/houston.service";
import {HoustonImplS3Service} from "../../src/services/houston-impl-s3.service";
import { mock, restore } from "aws-sdk-mock";
import { TYPES } from "../../src/utils/constants";

describe("Houston s3 Service", () => {
    let service:HoustonService;

    beforeEach(() => {
        service = new HoustonImplS3Service();
    });

    afterEach(() => {
        restore('S3');
    })

    it("Service get rules s3 error", () => {
        // setup
        mock('S3', 'getObject', function(params, callback) {
            callback({code: "2", message: "ERROR AWS", name: "AWS", time: new Date()}, undefined);
        });
        // execution
        service.getRules().catch((err:Error) => {
            // assertions
            expect(err.message).toEqual("ERROR AWS");
        })
    });

    it("Service get rules body undefined", () => {
        // setup
        mock('S3', 'getObject', {Body: undefined});
        // execution
        service.getRules().catch((err:Error) => {
            // assertions
            expect(err.message).toEqual("ERROR JSON FROM S3");
        })
    });

    it("Service get rules ok", () => {
        // setup
        const resString = [{"nameRule": "name","rule": "string"}];
        mock('S3', 'getObject', {Body: JSON.stringify(resString)});
        // execution
        service.getRules().then(res => {
            // assertions
            expect(res.body).toEqual(JSON.stringify(resString));
        })
    });

    it("service get type", () => {
        // setup
        // execution
        const res:string = service.getType();
        // assertions
        expect(res).toEqual(TYPES.S3);
    })

});

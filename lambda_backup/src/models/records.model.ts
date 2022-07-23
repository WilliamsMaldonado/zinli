export class Records {
    public records: record[];

    constructor(records: record[]){
        this.records = records;
    }
}

export type record = {
    recordId: string,
    result: string,
    data: any
}
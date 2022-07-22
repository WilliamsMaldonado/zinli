export class Response {
    public body: string;

    constructor(body: body) {
        this.body = JSON.stringify(body);
    }
}

export type body = {
    listRules: rule[];
}

export type rule = {
    nameRule: string;
    rule: string;
}
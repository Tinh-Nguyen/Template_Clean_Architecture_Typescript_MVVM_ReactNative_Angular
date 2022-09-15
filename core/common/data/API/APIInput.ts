export default class APIInput{
    url: string
    method: "get"| "post" | "put" | "delete"
    header?: {string: string}
    body?: any
    constructor(url: string, method: "get"| "post" | "put" | "delete", header? : any, body? : any){
        this.url = url;
        this.method = method;
        this.header = header;
        this.body = body;
    }
}
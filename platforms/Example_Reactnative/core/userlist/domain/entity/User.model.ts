export class User{
    firtname?: string
    lastname? : string
    email?: string
    constructor(firtname?: string, lastname?: string, email?: string){
        this.firtname = firtname;
        this.lastname = lastname;
        this.email = email;
    }
}
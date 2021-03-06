
export default class User{
    #firstname;
    #lastname;
    #email;

    constructor(firstname, lastname,email) {
        this.#firstname=firstname;
        this.#lastname=lastname;
        this.#email=email;
    }

    get fullName(){
        return `${this.#firstname} ${this.#lastname}`;
    }
    get email(){
        return `${this.#email}`
    }
}
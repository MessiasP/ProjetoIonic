import {Injectable} from "@angular/core";

@Injectable()
export class TokenService {
    get token() {
        return localStorage.getItem('token')
    }

    set token(token: string) {
        localStorage.setItem('token', token)
    }

    removeToken () {
        localStorage.clear()
    }
}

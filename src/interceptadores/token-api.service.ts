import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TokenService} from "../providers/token/token.service";
import {Observable} from "rxjs";

@Injectable()
/**
 * COISA DO JEFERSON
 */
export class TokenApiService implements HttpInterceptor{
    constructor (private tokenService: TokenService) {}

    // Vai intercepitar TODA A REQUISAO.
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // quando for intercepitado vai chamar o metodo  addToken(),
        // passando a requisicao q foi feita, a requisicao original, sem o headers
        // e vai passar o token
        if (this.tokenService.token) return next.handle(this.addToken(req, this.tokenService.token))
        return next.handle(req)
    }

    addToken (req: HttpRequest<any>, token: string) {
        // Eu acho q o clone vai clonar a requisao
        // depois vc pode adicionar o q vc quiser aqui, no caso so ta adicionando o token
        return req.clone({ setHeaders: { Authorization: `Bearer ${token}` }});
    }
}

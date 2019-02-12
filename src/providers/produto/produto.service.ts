import { Injectable } from "@angular/core";

import { Produto } from "../../model/produto/produto.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProdutoService {

  configURL = 'http://localhost:3000/api';
  apiURL = `${this.configURL}/produto`;

  authURL = `https://www.googleapis.com/identitytoolkit/v3/relyingparty`

  constructor(
    private http: HttpClient,
    ) {}

  async findAll() {
    let localHeaders = new HttpHeaders().set('Authorization', 'Bearer ' +  localStorage.getItem('token'));

    return await this.http.post(`${this.authURL}/getAccountInfo?key=`, {headers: localHeaders}).subscribe(data => {
      console.log('key', data)
      this.http.get(`${this.apiURL}`).subscribe(data => console.log("service 1 ", data));
  });
  }

  public  findByParam(marca: string) {
    return this.http.get('/Produtos'+marca).subscribe(data => {
      console.log('findParam', data);

    });
  }

  public create( produto: Produto ): Observable<Produto> {
    // Não retornar o subscribe, vc da no subscribe no meto q ta chamando esse ou seja na page
    return this.http.post(`${this.apiURL}`, produto);
  }

  update(produto: Produto) {
    // return this.productList.update(produto.codigoBarra, produto);
  }

  public delete(uid: string) {
    return this.http.get(`${this.apiURL}/${uid}`).subscribe(data => {
      console.log('delete', data);
    });
  }


}

import { Injectable } from "@angular/core";

import { Produto } from "../../model/produto/produto.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProdutoService {

  configURL = 'http://localhost:3000/api';
  apiURL = `${this.configURL}/produto`;

  constructor(
    private http: HttpClient,
  ) { }

  findAll() {
    return this.http.get(`${this.apiURL}`);
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

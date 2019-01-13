import { Injectable } from "@angular/core";

import { AngularFireDatabase } from "angularfire2/database";

import { Produto } from "../../model/produto/produto.model";

@Injectable()
export class ProdutoService {

  private productList = this.aFDatabase.list<Produto>('/Produtos');

  constructor(private aFDatabase: AngularFireDatabase) {}

  public findAll() {
    return this.productList;
  }

  public findByParam() {
    return  this.aFDatabase.object('/Produtos'+'/-LS5qOuxgJeTYmZ_w0eo').valueChanges();
  }

  public async create( produto: Produto ) {
    return await this.productList.push(produto);
  }

  update(produto: Produto) {
    // return this.productList.update(produto.codigoBarra, produto);
  }

  public delete(uid: string) {
    return this.aFDatabase
    .object(uid)
    .remove();
  }


}

import { Injectable } from "@angular/core";

import { AngularFireDatabase } from "angularfire2/database";

import { Produto } from "../../model/produto/produto.model";

@Injectable()
export class VendaProdutoService {

  private sellProductList = this.aFDatabase.list<Produto>('/comandas/sellproducts');

  constructor(private aFDatabase: AngularFireDatabase) {}

  public findList() {
    console.log("service 1 ", this.sellProductList);
    return this.sellProductList;
  }

  public  findOne(uid: string) {
    return this.aFDatabase.object('/sellproducts'+uid).valueChanges();
  }

  public async create( produto: Produto ) {
    console.log("Service Venda, ", produto);
    
    return await this.sellProductList.push(produto);
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

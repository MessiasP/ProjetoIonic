import { Injectable } from "@angular/core";

import { AngularFireDatabase } from 'angularfire2/database';

import { Produto } from './../../pages/Models/produto.model';

@Injectable()
export class ProdutoService {

  private productList = this.aFDatabase.list<Produto>('/Produtos');

  constructor(private aFDatabase: AngularFireDatabase){}

  public findAll() {
    return this.aFDatabase;
  }

  public findOne(uid: string) {
    return this.aFDatabase;
  }

  public async create( produto: Produto ) {
      return await this.productList.push(produto);
  }

  public delete( uid: string ) {
    return this.aFDatabase.object(uid).remove();
  }

}

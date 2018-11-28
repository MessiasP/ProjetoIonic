import { Injectable } from "@angular/core";

import { AngularFireDatabase } from "angularfire2/database";
import { Produto } from "../../model/produto/produto.model";


@Injectable()
export class ComandaService {

  private comandaList = this.aFDatabase.list<Produto>("/comanda");

  constructor( private aFDatabase: AngularFireDatabase ) {}

  public findAll() {
    return this.comandaList;
  }

  public findOne(uid: string) {
    return this.aFDatabase;
  }

  public async createComanda( comanda: Produto) {
    console.log("Service, Obj ", comanda);
    return await this.comandaList.push(comanda);
  }

  public delete(comanda: Produto) {
    return this.aFDatabase.object(comanda.codigoBarra).remove();
  }

  // public getUid() {
  //   this.afAuth.user.subscribe(res => {
  //     this.uid = res.uid;
  //     return this.uid;
  //   })
  // }
}

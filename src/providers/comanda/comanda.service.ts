import { Injectable } from "@angular/core";

import { AngularFireDatabase } from "angularfire2/database";
import { Produto } from "../../model/produto/produto.model";
<<<<<<< HEAD
import { Comanda } from "../../model/comanda/comanda.model";
=======
>>>>>>> fa3172099f9e5f38574700680b42fc02e450747a


@Injectable()
export class ComandaService {

<<<<<<< HEAD
  private comandaList = this.aFDatabase.list<Comanda>("/comandas");
=======
  private comandaList = this.aFDatabase.list<Produto>("/comanda");
>>>>>>> fa3172099f9e5f38574700680b42fc02e450747a

  constructor( private aFDatabase: AngularFireDatabase ) {}

  public findAll() {
    return this.comandaList;
  }

  public findOne(uid: string) {
    return this.aFDatabase;
  }

<<<<<<< HEAD
  public async  createComanda( comanda: Comanda) {
=======
  public async createComanda( comanda: Produto) {
>>>>>>> fa3172099f9e5f38574700680b42fc02e450747a
    console.log("Service, Obj ", comanda);
    // return await this.comandaList.push(comanda);
    return await this.comandaList.push(comanda)
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

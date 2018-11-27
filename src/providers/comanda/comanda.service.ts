import { Injectable } from "@angular/core";

import { AngularFireDatabase } from "angularfire2/database";
import { Comanda } from "../../model/comanda/comanda.model";


@Injectable()
export class ComandaService {

  private comandaList = this.aFDatabase.list<Comanda>("/comandas");

  private uid: string;

  constructor( private aFDatabase: AngularFireDatabase ) {}

  public findAll() {
    return this.comandaList;
  }

  public findOne(uid: string) {
    return this.aFDatabase;
  }

  public async createComanda( comanda: Comanda) {
    console.log("Service, Obj ", comanda);
    return await this.comandaList.push(comanda);
  }

  public delete(uid: string) {
    return this.aFDatabase.object(uid).remove();
  }

  // public getUid() {
  //   this.afAuth.user.subscribe(res => {
  //     this.uid = res.uid;
  //     return this.uid;
  //   })
  // }
}

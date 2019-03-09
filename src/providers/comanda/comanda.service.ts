import { Injectable } from "@angular/core";

import { Comanda } from "../../model/comanda/comanda.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class ComandaService {

  configURL = 'http://localhost:3000/api';
  apiURL = `${this.configURL}/comanda`;

  constructor( 
    private http: HttpClient, 
  ) { }

  public findAll(): Observable<Comanda> {
    return this.http.get(`${this.apiURL}`);
  }

  public findOne(uid: number): Observable<Comanda> {
    return this.http.get(`${this.apiURL}/${uid}`);
  }

  public createComanda(comanda: Comanda): Observable<Comanda> {
    console.log("Service, Obj ", comanda);
    return this.http.post(`${this.apiURL}`, comanda);
  }

  public delete(uid: string): Observable<Comanda> {
    return this.http.delete(`${this.apiURL}/${uid}`);
  }

  // public getUid() {
  //   this.afAuth.user.subscribe(res => {
  //     this.uid = res.uid;
  //     return this.uid;
  //   })
  // }
}

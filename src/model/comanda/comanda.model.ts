import { Produto } from "../produto/produto.model";

export  class Comanda {
   constructor(
      public _id?: number,
      public nome?: string,
      public descricao?: string,
      public valorVenda?: string,
      public createdAt?: Date,
      public produtos?: Produto[],
   ){}
}
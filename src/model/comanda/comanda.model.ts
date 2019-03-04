import { Produto } from "../produto/produto.model";

export  class Comanda {
   constructor(
      public _id?: number,
      public nome?: string,
      public descricao?: string,
      public valorTotal?: number,
      public createdAt?: Date,
      public idProdutos?: Produto[],
   ){}
}
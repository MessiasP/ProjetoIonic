import { Produto } from "../produto/produto.model";

export  class Comanda {
   constructor(
      public nome?: string,
      public descricao?: string,
      public valorVenda?: string,
      public produto?: Produto[],
   ){}
}
<<<<<<< HEAD
import { Produto } from "../produto/produto.model";

export  class Comanda {
   constructor(
      public nome?: string,
      public descricao?: string,
      public valorVenda?: string,
      public produto?: Produto[],
   ){}
=======
export  class Comanda {
   constructor(
      public key?: string,
      public nome?: string,
      public descricao?: string,
      public valorVenda?: string
   ){}
>>>>>>> fa3172099f9e5f38574700680b42fc02e450747a
}
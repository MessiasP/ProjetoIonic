export  class Produto {
   constructor(
      public _id?: number,
      public codigoBarra?: string,
      public nome?: string,
      public marca?: string,
      public valorCompra?: string,
      public valorVenda?: string,
      public quantidade?: string,
      public descricao?: string,
      public checked?: boolean,
   ){}
}
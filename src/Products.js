import React from "react";
import Product from "./Product";
import Title from "./Title";

const Products = () => {

  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
  <section>
    <Title text="Products" />
    {produtos.map((produto) => (
      <Product  key={produto.nome} {...produto}/>
    ))}
  </section>
  );
};

export default Products;

import React from "react";

const Product = ({ nome, propriedades }) => {
  return (
  <div style={{border: "1px solid", margin: "1rem", borderRadius: "10px", padding: "0px 15px"}}>
    <p>{nome}</p>
    <ul>
      {propriedades.map((propriedade) => (<li key={propriedade}>{propriedade}</li>))}
    </ul>
  </div>
  )
};

export default Product;

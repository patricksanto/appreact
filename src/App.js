import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from 'react'

// const App = () => {
//   let nome = 'Patrick'
//   return (
//     <React.Fragment>
//       <p>Form by {nome}</p>
//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome" />
//     </React.Fragment>
//   );
// }

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;
  const gastos = dados.compras.map((price) => parseInt(price.preco.replace('R$ ', '')));
  const soma = gastos.reduce(function(soma, i) {
    return soma + i;
});

  return (
  <>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>
      Situaçao : {''}
      <span style={{color: dados.ativa ? 'green' : 'red'}}>
        {dados.ativa ? 'Ativa' : 'Inativa'}
      </span>
    </p>
    <p>Total de gastos: R$ {soma}</p>
    {soma > 10000 && <p>Você esta gastando muito</p>}
  </>
  )
};


export default App;

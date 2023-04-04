import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from 'react'
import Header from './Header'
import Home from "./Home";
import Products from "./Products";

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
// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };

// const App = () => {
//   const dados = mario;
//   const gastos = dados.compras.map((price) => parseInt(price.preco.replace('R$ ', '')));
//   const soma = gastos.reduce(function(soma, i) {
//     return soma + i;
// });

//   return (
//   <>
//     <p>Nome: {dados.cliente}</p>
//     <p>Idade: {dados.idade}</p>
//     <p>
//       Situaçao : {''}
//       <span style={{color: dados.ativa ? 'green' : 'red'}}>
//         {dados.ativa ? 'Ativa' : 'Inativa'}
//       </span>
//     </p>
//     <p>Total de gastos: R$ {soma}</p>
//     {soma > 10000 && <p>Você esta gastando muito</p>}
//   </>
//   )
// };

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];

// const App = () => {

//   const dados = produtos.filter(({preco}) => Number(preco.replace('R$ ', '')) > 1500);

//   return (
//   <section>
//     {dados.map(({id, nome, preco, cores}) => <div key={id}>
//       <h1>{nome}</h1>
//       <p>Preço: R$ {preco}</p>
//       <ul>
//         {cores.map((cor) => (
//           <li style={{color: 'white', backgroundColor: cor}} key={cor}>{cor}</li>
//         ))}
//       </ul>
//     </div> )}
//   </section>
//   );
// };
const App = () => {
  const {pathname} = window.location;

  let Page;
  if(pathname === '/products'){
    Page = Products;
  } else {
    Page = Home
  }

  console.log(pathname);

  return (
  <div>
    <Header />
    <Page />

  </div>
  )
};

export default App;

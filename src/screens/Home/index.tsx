import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

export default function Home(props) {

  return (
    <div className="main-content">
      
      <div className="container">
      <Link className="back" to="/bitcoins">
        <img src="https://blog.valoreimoveis.com.br/wp-content/uploads/2019/01/255879-fique-por-dentro-da-tendencia-de-compra-de-imoveis-com-moedas-digitais-825x542.jpg" /></Link>
        <br />
        <Link className="back" to="/direct-treasure">
        <img src="https://blog.rico.com.vc/hs-fs/hubfs/tesouro-nacional-guia-brasil.jpg?width=1000&name=tesouro-nacional-guia-brasil.jpg" /></Link>
      </div>

    </div>
  );
} 

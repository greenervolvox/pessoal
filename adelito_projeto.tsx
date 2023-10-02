import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Menubar} from 'primereact/menubar';
import { Funacervo } from './pages/Acervo';
import { Funcadastro } from './pages/Cadastro';
import Funlogin  from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Biblioteca de Alexandria
        </p>
      </header>
      <body>
    <div className="Menu">
      <ul>
            <li><a href="">INÍCIO</a></li> 
            <li><a href="">CADASTRAR</a></li>
            <li><a href="">ACERVO</a></li>
        </ul>
        </div>
        <div className="Descricao1">
          Bem-vindo a Biblioteca de Alexandria! Você pode realizar seu LOGIN abaixo, ou acessar o menu para criar uma nova conta (CADASTRO) e acessar nosso ACERVO. 
        </div>
        <div className="Login">
        <Funlogin />
        </div>
      </body>
    </div>
    
  );
}



export default App;

//import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import { useState } from 'react';
import Saudacao from './components/Saudacao';
import SeuNome from './components/SeuNome';


function App() {

  const name = 'Sérgio';
  
  const letraMaiscula = name.toUpperCase();
  
  const url = "https://via.placeholder.com/150";

  function sum(a, b){
    return a+b;
  }

  const nome2 = "Maria";

  const meusItens = ['React', 'Vue', 'Angular'];

  const [nome, setNome] = useState();

  return (
    
    <div className="App">
      
      <h1>Hello, {letraMaiscula}</h1>
      
      <p>Soma {2+2}</p>
      
      <p>Soma {sum(9,1)}</p>
      
      <img src={url} alt="Imagem"/>
      
      <HelloWord/>
      
      <SayMyName nome="Sérgio"/>
      
      <SayMyName nome="Ana"/>
      
      <SayMyName nome={nome2}/>

      <Pessoa 
        img="https://via.placeholder.com/300x300" 
        nome="Rodrigo" 
        idade="18" 
        profissao="Programador"
      />

      <List/>

      <Evento/>

      <Form/>

      <Condicional/>

      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />

      <SeuNome setNome={setNome} />
      <p>{nome}</p>
    <Saudacao nome={nome}/>


    </div>
  
  );
}

export default App;

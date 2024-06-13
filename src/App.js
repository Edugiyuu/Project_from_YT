import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import "./styles.css"

import api from './services/api'

function App() {
const [input,setInput] = useState('')


 async function handleSearch() {
  if(input === ''){
    alert('tá vazio')
  }//01310938
  try{
    const response = await api.get(`${input}/json`)
    console.log(response);
  }catch{

  }
}
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text"
        placeholder="Digite seu cep..."
        value={input}
        onChange={event => setInput(event.target.value)}
        ></input>

        <button className="containerInput"></button>

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#000"></FiSearch>
        </button>
      </div>

      <main className="main">
        <h2>CEP: 00000000</h2>

        <span>Rua tal tal tal</span>
        <span>Complemento: bla bla</span>
        <span>Vila</span>
        <span>Campo Grande</span>
      </main>
    </div>
  );
}

export default App;

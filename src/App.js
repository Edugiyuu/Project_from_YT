import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { GrAddCircle } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import "./styles.css"

import api from './services/api'

function App() {
const [input,setInput] = useState('')
const [novoCep,setNovoCep] = useState('')
const [novoNome,setNovoNome] = useState('')
const [novaIdade,setNovaIdade] = useState('')
const [novoEmail,setNovoEmail] = useState('')
const [novaCidade,setNovaCidade] = useState('')
const [cep, setCep] = useState({})

 async function handleSearch() {
  if(input === ''){
    alert('Digite um CEP');
    return;
  }
  
  try {
    const response = await api.get(`${input}`);
    const response2 = await fetch(`http://localhost:3001/api/ceps/${input}`);

    console.log(response);
    console.log(response2);
    setCep(response.data);
    setInput('');
  } catch (error) {
    alert("erro");
  }
}

async function handleCreateCep() {
  if(novoCep === '' || novoNome === '' || novaIdade === '' || novoEmail === '' || novaCidade === ""){
    alert('Algum campo está vazio');
    return;
  }
  
  try {
    const response = await api.post('/',{cep: novoCep,nome: novoNome, idade: novaIdade , email: novoEmail, cidade: novaCidade});

    console.log(response);
    setNovoNome('')
    setNovoEmail('')
    setNovoCep('');
    setNovaIdade('')
    setNovaCidade('')
  } catch (error) {
    alert("erro");
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


        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#000"></FiSearch>
        </button>
      </div>

      <main className="main">
        <h2>CEP: {cep.cep}</h2>
        <span>{cep.nome}</span>
        <span>{cep.idade} Anos</span>
        <span>{cep.email}</span>
        <span>{cep.cidade}</span>
      </main>

      <br/>
      <h1 className="title">Criar CEP</h1>
      <div className="infoInput">
        <input type="number"
        placeholder="Crie um cep novo"
        value={novoCep}
        onChange={event => setNovoCep(event.target.value)}
        ></input>

        <input type="text"
        placeholder="Nome aqui"
        value={novoNome}
        onChange={event => setNovoNome(event.target.value)}
        ></input>

      <input type="number"
        placeholder="Idade aqui"
        value={novaIdade}
        onChange={event => setNovaIdade(event.target.value)}
        ></input>

        <input type="email"
        placeholder="Email aqui"
        value={novoEmail}
        onChange={event => setNovoEmail(event.target.value)}
        ></input>
        
        <input type="text"
        placeholder="Cidade aqui"
        value={novaCidade}
        onChange={event => setNovaCidade(event.target.value)}
        ></input>
      </div>

      <div className="CreateEDelete">
      <button className="buttonCreate" onClick={handleCreateCep}>
        <GrAddCircle size={50} color="#091"/>
        </button>
        <button className="buttonCreate" onClick={handleCreateCep}>
        <FaRegTrashAlt size={50} color="#901"/>
        </button>
        
        <input type="text"
        placeholder="Coloque o cep que deseja deletar"
        value={novaCidade}
        onChange={event => setNovaCidade(event.target.value)}
       
        ></input>
      </div>
        
    </div>
  );
}

export default App;

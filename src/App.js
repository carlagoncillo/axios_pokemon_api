import './App.css';
import axios from 'axios';
import React, {useState} from "react";

function App() {

  const [pkmn, setPkmn] = useState([]);

  const fetchPokemon = () => {
    console.log("Hello!")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(e => {
            console.log(e.data.results)
            setPkmn(e.data.results)
        });
  };

  return (
    <div className="App">
      {/* {JSON.stringify(pkmn)} */}
      <h1>Pokemon</h1>
      <button onClick={fetchPokemon} style={{backgroundColor: "lightgray"}}>Fetch Pokemon</button>
      <hr/>
          {pkmn.length > 1 ? pkmn.map((item, idx) => {
              return(<li key={idx}>{item.name}</li>)
          }):null}
    </div>
  );
}

export default App;

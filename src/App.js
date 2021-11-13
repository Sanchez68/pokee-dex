import React from "react";
import './App.css';
import PokesDeskContainer from "./components/Body/PokesDeskContainer";
import Header from "./components/Header/Header";



function  App () {
  return (
      <div className="App">
        <div className='headerWrapper'>
          <Header/>
        </div>
        <div className='bodyWrapper'>
          <PokesDeskContainer/>
        </div>
      </div>
  )
}


export default App;

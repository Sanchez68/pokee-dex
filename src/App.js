import React from "react";
import './App.css';
import PokesDeskContainer from "./components/Body/PokesDeskContainer";
import PokeHeader from "./components/PokeHeader/PokeHeader";
import "antd/dist/antd.css";


function  App () {
  return (
      <div className="App">
        <div className='headerWrapper'>
          <PokeHeader/>
        </div>
        <div className='bodyWrapper'>
          <PokesDeskContainer/>
        </div>
      </div>
  )
}


export default App;

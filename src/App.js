import NavBar from "./components/NavBar";
import React from 'react'
import "./app/style.css"
import ItemListContainer from "./components/ItemListContainer"


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido" />
    </div>
  )
}


export default App;


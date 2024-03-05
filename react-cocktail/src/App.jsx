import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import {Route , Routes } from 'react-router-dom'
import CocktailList from './components/CocktailList'
import Home from "./components/Home"
function App() {
  const [count, setCount] = useState(0)

  return ( 
    
    <>
< Header /> 
<Routes> 
  <Route path='/' element={<Home/>}/> 
  <Route path='/CocktailList' element={<CocktailList/>}/> 

</Routes>
    </>
  )
}

export default App

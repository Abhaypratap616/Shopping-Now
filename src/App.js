import React from 'react'
import Navbaar from './Component/Navbaar'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import Home from './Component/Home'
import Men from './Component/Men'
import Women from './Component/Women'
import Kids from './Component/Kids'
import Login from './Component/Login'
import Carts from './Component/Carts'

export default function App() {
  return (
    <div>
      <div>
      <Navbaar/>
      </div>
      <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='men' element={<Men/>}/> 
        <Route path='women' element={<Women/>}/> 
        <Route path='kids' element={<Kids/>}/> 
        <Route path='login' element={<Login/>}/> 
        <Route path='carts' element={<Carts/>}/> 
      </Routes>

     
    
    </div>
  )
}

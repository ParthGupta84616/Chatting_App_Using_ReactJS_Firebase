import React, { useContext } from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import { AuthContext } from './Context/AuthContext'

function App() {
  const {currentUser} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element ={<Home/>}/>
          <Route path="login" element ={<Login/>}/>
          <Route path="register" element ={<Register/>}/>


        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
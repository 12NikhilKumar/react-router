import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './Components/Navbar/Index'
import AppcontextProvider from './context/appcontext'

function App() {
  return (
    <AppcontextProvider>
   <BrowserRouter>
      <NavBar/>
   </BrowserRouter>
   </AppcontextProvider>
  )
}

export default App
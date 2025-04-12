import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { AuthContextProvider } from '../context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <ToastContainer theme='dark'
     position='to-rigth' 
     autoClose={3000}
      closeOnClick 
      pauseOnHover={false}
      />
    <App/>
    </AuthContextProvider>
    </BrowserRouter>
    
  </React.StrictMode>
)

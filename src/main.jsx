import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './context/UserContext.jsx'
import { IdeasProvider } from './context/ideasContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <IdeasProvider>
    <App />
    </IdeasProvider>
    </UserProvider>
  </React.StrictMode>,
)

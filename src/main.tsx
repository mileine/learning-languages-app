import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { LanguagesContextProvider } from './context/LanguagesContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguagesContextProvider>
      <App />
    </LanguagesContextProvider>
  </React.StrictMode>,
)

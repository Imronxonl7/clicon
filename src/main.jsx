import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContext from './context/CartContext.jsx'
import Language from './context/Language.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Language>
      <CartContext>
      <App />
    </CartContext>
    </Language>
  </StrictMode>,
)

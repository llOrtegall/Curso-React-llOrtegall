import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './src/App.jsx'
import './style.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

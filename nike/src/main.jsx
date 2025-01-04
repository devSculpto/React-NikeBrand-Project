import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar';
import Content from './content';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Content/>
  </StrictMode>,
)

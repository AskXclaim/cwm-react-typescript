import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import ExpenseApp from './ExpenseApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ExpenseApp />
  </StrictMode>,
)

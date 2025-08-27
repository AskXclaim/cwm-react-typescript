import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GameHubApp from './GameHubApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GameHubApp />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css";
import { Provider } from "@/components/ui/provider"
import GameHubApp from './gameHubApp/GameHubApp.tsx'

createRoot(document.getElementById('root')!).render(
    <Provider>
        <StrictMode>
            <GameHubApp />
        </StrictMode>,   
    </Provider>
)

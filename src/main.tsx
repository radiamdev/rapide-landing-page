import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './utils/i18n.ts' // Pour initialiser i18n
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <MantineProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </MantineProvider>
        </BrowserRouter>
    </StrictMode>
)

import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import Start from './Start'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement)
.render(
    <StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Start />
        </Suspense>
    </StrictMode>
)
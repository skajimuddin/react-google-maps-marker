import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GoogleMapsComponent from './GoogleMapsComponent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleMapsComponent />
  </StrictMode>,
)

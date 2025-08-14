import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router'
import Navbar from './components/Navbar.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Navbar />
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

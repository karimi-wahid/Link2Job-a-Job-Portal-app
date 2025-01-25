import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ApplyJobs from './pages/ApplyJobs.jsx'
import Applications from './pages/Applications.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import { ClerkProvider } from '@clerk/clerk-react'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/apply-job/:id',
        element: <ApplyJobs />
      },
      {
        path: '/applications',
        element: <Applications />
      }
    ]
  }
  
])


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
  <AppContextProvider>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
  </AppContextProvider>
  </ClerkProvider>
)

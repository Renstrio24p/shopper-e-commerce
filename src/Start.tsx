import { RouterProvider } from 'react-router-dom'
import './app.css'
import { router } from './components/routes/Router'
import ShopContextProvider from './context/ShopContext/ShopContext'

type props = {}

export default function Start({}:props) {

  return (
        <ShopContextProvider>
           <RouterProvider router={router} />
        </ShopContextProvider>
  )

}

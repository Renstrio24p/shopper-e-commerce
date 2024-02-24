import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Layout.css'
import Footer from '../../components/Footer/Footer'

type Props = {}

export default function Layout({}: Props) {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
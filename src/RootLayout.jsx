import { Outlet } from 'react-router'
import Header from './sections/Header'
import Footer from './sections/Footer'

const RootLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout
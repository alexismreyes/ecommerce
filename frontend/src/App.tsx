import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'

function App() {


  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )  

}

export default App

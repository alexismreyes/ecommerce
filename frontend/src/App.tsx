import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import PartnersBar from './PartnersBar'

function App() {

  //si no esta logeado lleva al usuario al login
  if(!localStorage.getItem("user")) return <Navigate to="/login" />

  return (
    <>
    <div className='app-container'>
      <Header/>
      <main className='main-content'>
        <Outlet/>
      </main>
      <PartnersBar />
      <Footer/>
      
    </div>
    </>
  )  

}

export default App

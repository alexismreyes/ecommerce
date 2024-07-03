import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import ParntersBar from './PartnersBar'
import PartnersBar from './PartnersBar'

function App() {


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

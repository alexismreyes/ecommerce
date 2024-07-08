import { Navigate, Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import PartnersBar from './PartnersBar'
import { getJwtToken } from './helpers/authHelper'

function App() {

  const jwttoken = getJwtToken();

  //si no esta logeado con una jwt validad lleva al usuario al login nuevamente
  if(!jwttoken)
    return <Navigate to="/login" /> 
 

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

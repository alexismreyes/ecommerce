import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Header from './Header'

function App() {


  return (
    <>
    <div className='app-container'>
      <Header/>
      <main className='main-content'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
    </>
  )  

}

export default App

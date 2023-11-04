import Footer from './Components/Footer'
import { Header } from './Components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import './Components/Header/header.css'

function App() {
  return (
    <div className='App'>
      <div className='content-wrap'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/favs' element={<Favs />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App

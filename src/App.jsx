import Footer from './Components/Footer'
import { Header } from './Components/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/favs' element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

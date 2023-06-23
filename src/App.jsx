import Footer from './Components/Footer'
import { Header } from './Components/Header/Header'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/contact' element={<h1>Contact</h1>} />
        <Route path='/favs' element={<h1>Favs</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

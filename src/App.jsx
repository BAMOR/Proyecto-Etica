import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Introduccion } from './pages/Introduccion'

export const App = () => {

  return(
    <>
    <Router>
     <Navbar/>
      <div className='container mt-3'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduccion" element={<Introduccion />} />
        </Routes>

      </div>
    </Router>
    </>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'

import { Introduccion } from './pages/Introduccion'
import {Home} from "./pages/Home"

export const App = () => {

  return(
    <>
    <Router>
     <Navbar/>
      <div className='container mt-3'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/introduccion" element={<Introduccion />} />
        </Routes>

      </div>
    </Router>
    </>
  )
}

export default App
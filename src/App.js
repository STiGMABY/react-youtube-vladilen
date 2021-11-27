import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Main} from './pages/Main'
import {About} from './pages/About'
import {NavBar} from './components/NavBar'
import {Alert} from './components/Alert'
import {AlertState} from './contex/alert/alertState'

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <NavBar/>
        <div className="container pt-4">
          <Alert/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
  )
}

export default App

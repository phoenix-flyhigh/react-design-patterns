import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import RenderPropsPattern from './patterns/RenderPropsPattern'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <h1>React Design Patterns</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/render" replace />} />
          <Route path="/render" element={<RenderPropsPattern />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import RenderPropsPattern from './patterns/RenderPropsPattern'
import CommentSection from './patterns/OptimisticUI'
import HigherOrderComponents from './patterns/HigherOrderComponents'
import CompoundComponent from './patterns/CompoundComponent'
import { ControlledComponentPattern } from './patterns/ControlledComponent'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <h1>React Design Patterns</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/render" replace />} />
          <Route path="/render" element={<RenderPropsPattern />} />
          <Route path="/optimistic" element={<CommentSection />} />
          <Route path="/hoc" element={<HigherOrderComponents />} />
          <Route path="/compound" element={<CompoundComponent />} />
          <Route path="/controlled" element={<ControlledComponentPattern />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

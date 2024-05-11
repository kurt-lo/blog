import './index.css'
import AuthPage from './pages/AuthPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
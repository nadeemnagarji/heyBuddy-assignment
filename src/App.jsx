import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupPage from './pages/SignupPage'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import EmailSignUp from './pages/EmailSignUp'
import Home from './pages/Home'
import MainSignUp from './pages/MainSignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path='/'      element={<MainSignUp />} />
        <Route path='/phone-signup'      element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/email-signup' element={<EmailSignUp/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>

    </Router>
  )
}

export default App

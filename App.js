import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import TestPage from './pages/TestPage'
import OrganizationProfile from './pages/OrganizationProfile'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import SideBar from './components/SideBar'
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          {/* <SideBar /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/testPage' element={<TestPage />} />
            <Route path='/user/:userProfile' element={<UserProfile />} />
            <Route path='/:profileName' element={<UserProfile />} />
            {/* <Route path='/:organizationName' element={<OrganizationProfile />} /> */}
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App

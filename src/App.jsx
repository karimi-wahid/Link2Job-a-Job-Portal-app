import React, { useContext } from 'react'
import RecruitarLogin from './components/RecruitarLogin'
import AppContext from './context/AppContext'
import { Outlet } from 'react-router-dom'
import 'quill/dist/quill.snow.css'

const App = () => {
  const {showRecruiterLogin} = useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <RecruitarLogin />}
      <Outlet />
      
    </div>
  )
}

export default App
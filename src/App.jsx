import React from 'react'
import Sidebar from './components/Sidebar'
import RighSider from './components/RighSider'
import './App.css'


const App = () => {
  return (
  <>
  <div className='h-screen w-full flex '>
  <Sidebar/>
  <RighSider/>
  </div>
  
  </>
  )
}

export default App
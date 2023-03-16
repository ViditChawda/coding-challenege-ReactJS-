import React from 'react'
import Header from './components/Header'
import ClientCard1 from './components/ClientCard1'
import DropDown from './components/DropDown'
import Modals from './components/Modals'
import SideBar from './components/SideBar'

const App = () => {
  return (
    <div>
      <Header />
      <div className='d-flex'>
        <div className='p-5 bg-dark'> <SideBar /> </div>
        <div className=''> <ClientCard1 /> </div>
      </div>
    </div>

  )
}

export default App
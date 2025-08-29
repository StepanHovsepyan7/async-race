import React from 'react'
import Header from './common/components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>

      <Header /> 
      <div className="App">
        <Outlet /> 
        
      </div>
    </div>
  )
}

export default Layout
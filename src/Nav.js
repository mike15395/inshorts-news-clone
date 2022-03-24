import React from 'react'
import TemporaryDrawer from './DrawerLeft'
import './Nav.css'


function Nav({setCategory}) {
  return (
      <div className='nav'>
          <div className='nav-menu'>
              <TemporaryDrawer setCategory={setCategory }/>
         </div>
          <img
              className='nav-image'
              alt="logo"
              src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
            
          />
          
      </div>
  )
}

export default Nav
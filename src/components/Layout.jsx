import React from 'react'
import {Navbar} from './Navbar'

export const Layout = ({children}) => {
  return (
    <>
    <div className='container mx-auto min-h-screen'>
    <Navbar/>
    {children}
    </div>
    
    </>
  )
}

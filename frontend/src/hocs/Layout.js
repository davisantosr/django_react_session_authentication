import React, { Fragment } from 'react'
import Navbar from '../components/navbar/Navbar'


const Layout = ({children}) => (

  <Fragment>
     <Navbar /> 
     {children}     
  </Fragment>
)

export default Layout
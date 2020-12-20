import React, { Fragment} from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  const guestLinks = (
    <Fragment>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/login'>Login</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/register'>Register</NavLink>
      </li>
    </Fragment>

  )
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand'  exact to='/'>Session Auth</Link> 
        <a className='navbar-brand' href='#'>Navbar</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/'>Home</NavLink>
            </li>
            
            { guestLinks }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
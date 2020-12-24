import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => (
  <div className='container'>
    <div className='mt-5 p-5 bg-light'>
      <div className='display-4'> Welcome to Session Auth </div>
      <p className='lead'>
        This is a wonderful application with session authentication in React and Django
      </p>
      <hr className='my-4' />
      {/* <p> Click the button below to log in</p> */}
      {/* <Link className='btn btn-primary btn-lg' to='/login'>
        Login
      </Link> */}

    </div>
  </div>
)

export default Home
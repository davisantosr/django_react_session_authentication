import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';

import { login } from '../../actions/auth'

import CSRFToken from '../../components/CSRFToken/CSRFToken'

const Login = ({login, isAuthenticated}) => {
  const [ formData, setFormData ] = useState({
    username: '', 
    password: '', 
  });


  const { username, password } = formData;

  const onChange = event => setFormData({...formData, [event.target.name]: event.target.value});

  const onSubmit = e => {
    e.preventDefault();

      login(username, password);

  };

  if(isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
    <div className='container mt-5'>
      <h1>Sign into yout account</h1>
      <p>Sign in into your Session Auth application</p>
      <form onSubmit={e => onSubmit(e)}>
        <CSRFToken/>
        <div className='form-group'>
          <label className='form-label'>Username</label>
          <input
            className='form-control'
            type='text'
            placeholder='username *'
            name='username'
            onChange={e => onChange(e)}
            value={username}
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label mt-3'>Password</label>
          <input
            className='form-control'
            type='password'
            placeholder='Password'
            name='password'
            onChange={e => onChange(e)}
            value={password}
            minLength='6'
            required
          />
        </div>
        
        <button className='btn btn-primary mt-3' type='submit'>Login</button>
      </form>
      <p className='mt-3'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
      
    </div>
  )

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login)
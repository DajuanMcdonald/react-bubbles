import React from 'react'
import {Link } from 'react-router-dom'
import { axiosWithAuth } from '../utils/AxiosWithAuth'

const Login = props => {

    const [credential, setCredentials ] = React.useState({
      username: '',
      password: '',
      isSubmitting: false
    })

  

  const handleChange = e => {
    setCredentials({...credential, [e.target.name]: e.target.value})
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('/api/login', credential)
    .then(res => {localStorage
      .setItem('token', res.data.payload)
      props.history.push('/bubble-page')
    })
  }

  
    const { username, password, isSubmitting} = props;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Login</h1>
        <form name="form" onSubmit={login}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" onChange={handleChange}/>
            {isSubmitting && !username && <div>Username required</div>}
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange}/>
            {isSubmitting && !password && <div>Password required</div>}

          </div>

          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            <Link to="/" className="btn btn-link">Register</Link>

          </div>

        </form>
        
      </div>
    )
  }
// }
export default Login;
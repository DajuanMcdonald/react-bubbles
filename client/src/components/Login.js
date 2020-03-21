import React from 'react'
import {Link } from 'react-router-dom'

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    // always bailout with rest
    // this.props.logout();
    this.state = {
      username: '',
      password: '',
      isSubmitting: false
    }

  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ isSubmitting: true });
    const {username, password} = this.state;
    if (username && password) {
      this.props.logIn(username, password);
    }
  }

  render() {
    const { logIn } = this.props;
    const { username, password, isSubmitting} = this.state;

    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Login</h1>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (isSubmitting && !username ? 'has-error' : '')}>
            <label>Username</label>
            <input type="text" name="username" value={username} onChange={this.handleChange} />
            {isSubmitting && !username && <div>Username required</div>}
          </div>
          <div className={'form-group' + (isSubmitting && !password ? 'had-error' : '')}>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
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
}

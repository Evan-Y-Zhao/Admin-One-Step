import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  Input, Button, message
} from 'antd'
import { login, handleChange } from 'Actions/auth'

class Adminlogin extends PureComponent {

  componentDidMount () {
    if (this.props.isAuthenticated === 'success') {
      // logged in, let's show redirect if any, or show home
      this.props.history.replace('/feedback')
    } else if (this.props.isAuthenticated === 'error') {
      message.error('Error occurs')
    }
  }

  /**
     * Listen on the changes on fields.
     *
     * @param  Key The corresponding key.
     * @param  Value Assign the value that user is typing.
     */
  onChange = (key, value) => {
    this.props.handleChange({
      [key]: {
        value,
        helperText: '',
        error: false
      }
    })
  }

  // Fire the login action if fields meet the validations, otherwise display error messages.
  handleLogin = (event) => {
    event.preventDefault()

    const username = this.props.username.value
    const password = this.props.password.value

    if (username.trim() === '') {
      this.props.handleChange({
        username: { error: true, helperText: 'User name is required' },
      })
    }
    if (password.trim() === '') {
      this.props.handleChange({
        password: { error: true, helperText: 'Password is required' },
      })
    }

    if (username && password) {
      this.props.login({ username, password })
    }
    return false;
  }

  render() {
    // const { adminUser } = this.props;
    const { username, password } = this.props

    return (
      <div className='admin-login'>
        <div className="login-title-first">
          Finance AR Clearance Tool
        </div>
        <div className="login-title-second">
          Login
        </div>
        <form onSubmit={this.handleLogin}>
          <div className={`admin-input ${username.error ? 'has-error' : ''}`}>
            <label className="input-title">User Name</label>
            <Input
              placeholder='Please input your user name'
              value={username.value}
              name="username"
              onChange={(event) => this.onChange('username', event.target.value)}
              allowClear
            />
          </div>
          {
            username.error ? <div className='admin-error-text'>{username.helperText}</div> : null
          }
          <div className={`admin-input ${password.error ? 'has-error' : ''}`}>
            <label className="input-title">Password</label>
            <Input
              placeholder='Please input password'
              value={password.value}
              type='password'
              name="userPassword"
              onChange={(event) => this.onChange('password', event.target.value)}
              allowClear
            />
          </div>
          {
            password.error ? <div className='admin-error-text'>{password.helperText}</div> : null
          }
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleLogin}>
            Login
          </Button>


        </form>

      </div >
    );
  }

}

const mapStateToProps = state => {
  const { auth } = state;
  return {
    isAuthenticated: auth.isAuthenticated,
    username: auth.username,
    password: auth.password
  }
};

const mapDispatchToProps = {
  login,
  handleChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Adminlogin)


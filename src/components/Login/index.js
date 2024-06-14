import {Component} from 'react'

import {Redirect, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

class LoginRoute extends Component {
  onCookiesFunc = data => {
    const jwtToken = data.jwt_token
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.push('/')
  }

  onClickLogin = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(apiUrl, options)
      const data = await response.json()
      if (response.ok) {
        this.onCookiesFunc(data)
        // Handle successful login
      } else {
        console.log('Login failed')
        // Handle login failure
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  render() {
    const jwToken = Cookies.get('jwt_token')
    if (jwToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickLogin}>
          Login with Sample Creds
        </button>
      </>
    )
  }
}

export default withRouter(LoginRoute)

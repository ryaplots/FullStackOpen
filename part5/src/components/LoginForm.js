import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ 
    handleLogin, 
    username, 
    password, 
    handleUsernameChange, 
    handlePasswordChange 
}) => (
    <form onSubmit={handleLogin}>
        <div>
            Username
            <input
                id="usernameInput"
                type="text"
                value={username}
                name="Username"
                onChange={handleUsernameChange}
            />
        </div>
        <div>
            Password
            <input 
                id="passwordInput"
                type="password"
                value={password}
                name="Password"
                onChange={handlePasswordChange}
            />
        </div>
        <button id="submitButton" type="submit">login</button>
    </form>
)

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginForm
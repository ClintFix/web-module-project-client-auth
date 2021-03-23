import e from 'cors'
import React from 'react'

const Login = () => {

    const submit = (e) => {
        e.preventDefault();
        //TODO
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type='text' placeholder='Username'/>
                <input type='password' placeholder='Password'/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
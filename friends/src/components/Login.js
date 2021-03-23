
import React, {useState} from 'react'

const initialFormValues = {
    username: '',
    password: ''
}

const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        })
    }

    const submit = (e) => {
        e.preventDefault();
        //TODO
        setFormValues(initialFormValues)
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input name={'username'} type='text' placeholder='Username' value={formValues.username} onChange={handleChange}/>
                <input name={'password'} type='password' placeholder='Password' value={formValues.password} onChange={handleChange}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;
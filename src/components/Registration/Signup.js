import axios from 'axios'
import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const Signup = (props) => { 
    const[state, setState] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: ''
    })

    const handleChange = (e) => { 
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            id: value
        }))
    }
   
    const handleSubmit = (e) => { 
        if(state.password === state.confirmPassword){
            submitUserInfo()
        } else { 
            props.showError('Passwords do not match')
        }
    }

    const submitUserInfo = () => { 
        if(state.username.length > 2 && state.email.length && state.password.length > 2){ 
            let payload = {
                username: state.username,
                email: state.email,
                password: state.password
            }
            axios.post("https://localhost:3001/user/register", payload)
                .then(function(response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration Successful!'
                        }))
                        redirectToHome()
                        props.showError(null)
                    } else { 
                        props.showError("An error occured")
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        } else {
            props.showError('Please enter valid username and password')
        }
    }

    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <Form>
            <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="username"
                        id="username"
                        name="username" 
                        placeholder="Create Username" 
                        onChange = {handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email"
                        id="email"
                        name="email" 
                        placeholder="Enter email" 
                        onChange = {handleChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Password" 
                        onChange = {handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="confirmPassword" 
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password" 
                        onChange = {handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>

    )

}

export default Signup
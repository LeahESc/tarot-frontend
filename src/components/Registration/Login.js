import axios from 'axios'
import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const Login = (props) => { 
    const[state, setState] = useState({
        username: '',
        password: '',
        errors: ''
    })

    const handleChange = (e) => { 
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            id: value
        }))
    }
   
    // const handleSubmit = (e) => { 
    //     if(state.password === state.confirmPassword){
    //         submitUserInfo()
    //     } else { 
    //         props.showError('Passwords do not match')
    //     }
    // }

    const submitUserInfo = (e) => { 
        e.preventDefault()
       
        let user = {
            username: state.username,
            password: state.password
        }
        let configObj = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}),
        }
        fetch('http://localhost:3001/login', configObj, {withCredentials: true})
        .then(resp => resp.json())
        .then(response => { 
                if (response.data.logged_in) { 
                    props.handleLogin(response.data)
                    redirectToHome()
                } else { 
                    setState({
                        errors: response.data.errors
                    })
                }
            })
        .catch(error => console.log('api errors login:', error))
    }


    const redirectToHome = () => {
        props.history.push('/');
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <Form onSubmit={submitUserInfo}> 
            <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="username"
                        id="username"
                        name="username" 
                        placeholder="Enter Your Username" 
                        onChange = {handleChange}/>
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>

    )

}

export default Login
import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const RegistrationForm = (props) => { 
    const[state, setState] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => { 
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            id: value
        }))
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

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>

    )

}

export default RegistrationForm
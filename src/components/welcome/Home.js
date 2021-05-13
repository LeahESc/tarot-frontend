import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'

const Home = () => {
    return (
        <div className="home"> 

            <h1 className="title"> Small Spells Tarot </h1>

            <div className="registrationContainer">
                <Button><Link to='/signup'>Sign Up</Link></Button>
            </div>

            <div className="registrationContainer">
                <Button><Link to='/login'>Login</Link></Button>
            </div>
        </div>
    )
}
export default Home
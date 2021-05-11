import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home"> 
            <h1> Small Spells Tarot </h1>
            <div className="registrationContainer">
            <Link to='/signup'>Sign Up</Link>
            <br></br>
            <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}
export default Home
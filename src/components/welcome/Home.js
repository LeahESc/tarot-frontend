import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className="home"> 

            <h1 className="title"> Small Spells Tarot </h1>

            <div className="registrationContainer">
                <Link to='/signup'>Sign Up</Link>
            </div>

            <div className="registrationContainer">
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}
export default Home
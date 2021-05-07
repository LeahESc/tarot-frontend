import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <h1> Small Spells Tarot </h1>
            <Link to='/signup'>Sign Up</Link>
            <br></br>
            <Link to='/login'>Login</Link>
        </div>
    )
}
export default Home
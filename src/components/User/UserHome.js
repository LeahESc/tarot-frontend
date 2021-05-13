import React from 'react'
import Button from '../Button/Button.js'

const UserHome = (props) => {
    if(props.user) { 
    return (
        <div>
            <h1 className="title"> Hello {props.user.username}</h1>
        
        <Button>Past Pulls</Button>
        <Button>Card of the Day</Button>
        <Button>Start A New Spread</Button>
        </div>
    )
    } else { 
        return (
            <div>
                <h1> Please login or signup</h1>
            </div>
        )
    }
}

export default UserHome 

import React from 'react'

const UserHome = (props) => {
    if(props.user) { 
    return (
        <div>
            <h1> Hello {props.user.username}</h1>
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

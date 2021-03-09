import React from 'react';
import './UserOutput.css'
const userOutput = (props) => {
    return(
        <div className="UserOutputDiv">
            <p className="UserOutput">{props.username}</p>
            <p>Username: {props.username}</p>
        </div>
    )
}

export default userOutput;
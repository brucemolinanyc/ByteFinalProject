import React from 'react'

const FormFailure = () => (
    <div className="ui error message">
        <div className="header">User not found</div>
            <p>Your information was not found at this address but you may be registered elsewhere - 
            Please <strong><a href="https://www.elections.ny.gov/VotingRegister.html" target="blank">click here </a></strong> 
            to register your current address.</p>
    </div>
)

export default FormFailure;
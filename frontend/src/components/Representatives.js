import React from 'react';
import './Representatives.css'  

class Representatives extends React.Component{
    constructor(){
        super()
    }

    state = {

    }

    render(){
        return(
            <div className="reps_container">

            <div className="input_div">
                <h1>Your Representatives</h1> 
                <p>Enter your address to <strong>find and contact</strong> your federal, state, county and local elected representatives</p>
            
                <div class="ui fluid action input">
                    <input type="text" placeholder="Enter your address to find who represents you"/>
                    <button class="ui button green">Search</button>
              </div>

              <div className="checkboxes">    
              Show level of government: &nbsp;&nbsp; 

                <input type="checkbox" />
                <label className="local">  Local&nbsp;&nbsp;&nbsp;</label>
                
                <input type="checkbox" />
                <label className="county">  County &nbsp;&nbsp;&nbsp;</label>
                
                <input type="checkbox" />
                <label className="state">  State &nbsp;&nbsp;&nbsp;</label>
                
                <input type="checkbox" c/>
                <label className="federal">  Federal  </label>
              </div>

            </div>
               
            </div>
        )
    }
}

export default Representatives;
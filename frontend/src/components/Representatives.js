import React from 'react';
import RepresentativesCard from './RepresentativesCard';
import Table from './Table';
import './Representatives.css';  
import { Card } from 'semantic-ui-react';


class Representatives extends React.Component{
 
    state = {
        input: null,
        divisions: null,
        offices: null,
        officials: null
    }

    onChange = (e) => {
        this.setState({input: e.target.value})
    }

    onClick = (e) => {
        const address_elements = this.state.input.split(" ")
        const city = address_elements.slice(-3)[0]
        const state = address_elements.slice(-2)[0]
        const zipcode = address_elements.slice(-1)[0]
        // console.log(`http://127.0.0.1:5000/google/${city}/${state}/${zipcode}`)

        fetch(`http://127.0.0.1:5000/google/${city}/${state}/${zipcode}`, {
            method: 'get',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": '*'
            }
        })
        .then(response => response.json())
        .then(data => this.setState({
            divisions: data.divisions,
            offices: data.offices,
            officials: data.officials
        }))
    }

    render(){
        const reps = (this.state.officials !== null) && this.state.officials.map((el, idx) =>  
                            <Table 
                            key={idx}
                            index={idx} 
                            divisions={this.state.divisions}
                            offices={this.state.offices[idx]} 
                            official={this.state.officials[idx]}
                            /> )
        
        return(
            <div className="reps_container">
                <div className="input_div">
                    <h1>Your Representatives</h1> 
                    <p>Enter your address to <strong>find and contact</strong> your federal, state, county and local elected representatives</p>
                
                    <div className="ui fluid action input">
                        <input onChange={this.onChange} type="text" placeholder="Enter your address to find who represents you"/>
                        <button onClick={this.onClick} className="ui button green">Search</button>
                    </div>
                </div>

                
                   
            
               

                    <div className="representatives">
                        {(this.state.officials !== null) && reps }
                    </div>
               
            </div>
        )
    }
}

// <Card.Group  itemsPerRow={4}> {reps}</Card.Group>

export default Representatives;


//   <div className="checkboxes">    
            //   Show level of government: &nbsp;&nbsp; 

            //     <input type="checkbox" />
            //     <label className="local">  Local&nbsp;&nbsp;&nbsp;</label>
                
            //     <input type="checkbox" />
            //     <label className="county">  County &nbsp;&nbsp;&nbsp;</label>
                
            //     <input type="checkbox" />
            //     <label className="state">  State &nbsp;&nbsp;&nbsp;</label>
                
            //     <input type="checkbox" />
            //     <label className="federal">  Federal  </label>
            //   </div>
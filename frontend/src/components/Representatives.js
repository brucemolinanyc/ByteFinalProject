import React from 'react';
import Table from './Table';
import './Representatives.css';  

class Representatives extends React.Component{
    constructor(){
        super()
    }

    state = {
        input: null,
        divisions: null,
        offices: null,
        officials: null,
        specificOfficeName: null,
        specificOfficialName: null
    }
    

    onChange = (e) => {
        this.setState({input: e.target.value})
    }

    onClick = (e) => {
        const address_elements = this.state.input.split(" ")
        const city = address_elements.slice(-3)[0]
        const state = address_elements.slice(-2)[0]
        const zipcode = address_elements.slice(-1)[0]

        fetch(`http://127.0.0.1:5000/google/${city}/${state}/${zipcode}`, {
            method: 'get',
            mode: "cors",
        })
        .then(response => response.json())
        .then(data => {
            const offices_state = []
            const officials_state = []
            data.offices.map((el) => {
                var i = 0
                do {
                    i ++
                    offices_state.push(el.name)
                } while(i < el.officialIndices.length);
            })
            data.officials.map((el) => {
                officials_state.push(el.name)
            })
            
            this.setState({
            specificOfficeName: offices_state,
            specificOfficialName: officials_state,
            offices: data.offices,
            officials: data.officials
        })
        
        }
        )
    }

    render(){
        const reps = (this.state.officials !== null) && this.state.officials.map((el, idx) =>  
                            <Table 
                            key={idx}
                            index={idx} 
                            official={this.state.officials[idx]}
                            // offices={this.state.offices}
                            specificOfficeName={this.state.specificOfficeName[idx]} 
                            specificOfficialName={this.state.specificOfficialName[idx]}
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
                        {(this.state.officials && 
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Representative</th>
                                        <th>Office</th>
                                        <th>Address</th>
                                        <th>Links</th>
                                    </tr>
                                </thead>
                            {(this.state.officials !== null) && reps }
                            </table>)}
                    </div>
               
            </div>
        )
    }
}


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
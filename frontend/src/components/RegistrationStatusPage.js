import React from 'react';
import { Form, Container, Button} from 'semantic-ui-react';
import {options, states, months, dates, years} from './Utilities'
import './RegistrationStatusPage.css';

class RegistrationStatusPage extends React.Component{

    constructor(){
        super();
    
    this.state = {
        FirstName: null,
        MiddleInitial: null,
        LastName: null,
        Gender: null,
        StreetAddress: null,
        Apt: null,
        City: null,
        State: null,
        Zip: null,
        Month: null,
        Date: null,
        Year: null
    }
}

    onSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    genderChange = (e) => {
        const gender = e.target.innerHTML.replace(`<span class="text">`,"").replace(`</span>`,"")
        this.setState({ Gender : gender})
    }

    stateChange = (e) => {
        const state = e.target.innerHTML.replace(`<span class="text">`,"").replace(`</span>`,"")
        console.log(state)
        this.setState({ State : state})
    }

    monthChange = (e) => {
        const month = e.target.innerHTML.replace(`<span class="text">`,"").replace(`</span>`,"")
        this.setState({ Month : month})
    }

    dateChange = (e) => {
        const date = e.target.innerHTML.replace(`<span class="text">`,"").replace(`</span>`,"")
        this.setState({ Date : date})
    }

    yearChange = (e) => {
        const year = e.target.innerHTML.replace(`<span class="text">`,"").replace(`</span>`,"")
        this.setState({ Year : year})
    }

    render(){
        return(
            <Container className="container">
                <div className="ui huge header centered">Check Your Voter Registration Status</div>

                <Form className="form" onSubmit={this.onSubmit}>
                    <Form.Group widths='equal' >
                    {console.log(this.state)}
                        <Form.Input fluid label='First Name' placeholder='First name' width={7} name="FirstName" onChange={this.onChange}  />
                        <Form.Input fluid label='Middle Initial' placeholder='Middle Initial' name="MiddleInitial" width={2} onChange={this.onChange}/>
                        <Form.Input fluid label='Last Name' placeholder='Last name' name="LastName" width={7} onChange={this.onChange}/>
                    </Form.Group>
                
                    <Form.Group >
                        <Form.Input fluid label='Street Address' placeholder='Street Address' width={16} name="StreetAddress" onChange={this.onChange} />
                        <Form.Input fluid label='Apt/Unit#' placeholder='Apt/Unit#' width={2} name="Apt" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group className="FormGroup" widths='equal'>
                        <Form.Input fluid label='City' placeholder='City' width={8} name="City" onChange={this.onChange} />
                        <label htmlFor=""><strong>State</strong></label>
                        <br></br>
                        <Form.Select className="State" fluid  options={states} placeholder='State'  width={2} name="State" onChange={this.stateChange}/>
                        <Form.Input fluid label='Zip' placeholder='Zip' width={3} name="Zip" onChange={this.onChange}/>
                    </Form.Group>

                    <label htmlFor=""><strong>Birthdate</strong></label>
                    <Form.Group >
                        <Form.Select className="Month" fluid  options={months} placeholder='Month'  width={2} name="Month" onChange={this.monthChange}/>
                        <Form.Select className="Date" fluid options={dates} placeholder='Date'  width={2} name="Date" onChange={this.dateChange}/>
                        <Form.Select className="Year" fluid options={years} placeholder='Year'  width={2} name="Year" onChange={this.yearChange}/>
                        <Form.Select className="Gender" fluid  options={options} placeholder='Gender'  width={2} name="Gender" onChange={this.genderChange}/>                    
                    </Form.Group>

                    <Form.Field className="formButton" color="red" control={Button}> Look up my Status </Form.Field>

                </Form>   
            </Container>

        )
    }
}
    
export default RegistrationStatusPage


// To do:
// * find a nice form for persons to enter their information 
// * develop search methods to parse the database - need to have some matches or similarly close matches 
// * validation check if you're registered and redirect if you're not 


import React from 'react';
import { Form, Container, Button} from 'semantic-ui-react';
import {options, states, months, dates, years} from './Utilities';
import './RegistrationStatusPage.css';
import FormSuccess from './FormSuccess'
import FormFailure from './FormFailure';
 
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
        ZipCode: null,
        Month: null,
        Day: null,
        Year: null,
        Voter: ''
    }
}

    onSubmit = (e) => {
        e.preventDefault()
        const FirstName = this.state.FirstName.toUpperCase()
        const LastName = this.state.LastName.toUpperCase()
        const Gender = this.state.Gender.toUpperCase()
        // const StreetAddress = this.state.StreetAddress.toUpperCase()
        // const Apt = this.state.Apt.toUpperCase()
        // const City = this.state.City.toUpperCase()
        const ZipCode = this.state.ZipCode
        const Month= this.state.Month
        const Day = this.state.Day
        const Year = this.state.Year

        const formattedBirthdate = `${Year}${Month}${Day}`
        const formattedGender = Gender === "MALE" ? "M" : "F"

        fetch(`http://localhost:5000/search/${FirstName}/${LastName}/${formattedGender}/${formattedBirthdate}/${ZipCode}`,{
            method: 'get',
            mode: 'cors',
            headers: {"Content-Type": "application/json"},
        })
        .then(response => response.json())
        .then(data => this.setState({Voter: data.truthy}))
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
        this.setState({ State : state})
    }

    monthChange = (e) => {
        const month = e.target.innerHTML.replace(`<span class="text">`,"").replace(`</span>`,"")
        this.setState({ Month : month})
    }

    dayChange = (e) => {
        const day = e.target.innerHTML.replace(`<span class="text">`,"").replace(`</span>`,"")
        this.setState({ Day : day})
    }

    yearChange = (e) => {
        const year = e.target.innerHTML.replace(`<span class="text">`,"").replace(`</span>`,"")
        this.setState({ Year : year})
    }

    render(){
        const result = (this.state.Voter !== '' && this.state.Voter === true) ?  <FormSuccess/> :  <FormFailure/>
    
        return(
            <Container className="container">
                <div className="ui huge header centered">Check Your Voter Registration Status</div>

                <Form className="form" onSubmit={this.onSubmit}>
                    <Form.Group widths='equal' >
                        <Form.Input required fluid label='First Name' placeholder='First name' width={7} name="FirstName" onChange={this.onChange}  />
                        <Form.Input fluid label='Middle Initial' placeholder='M.I.' name="MiddleInitial" width={2} onChange={this.onChange}/>
                        <Form.Input required fluid label='Last Name' placeholder='Last name' name="LastName" width={7} onChange={this.onChange}/>
                    </Form.Group>
                
                    <Form.Group >
                        <Form.Input required fluid label='Street Address' placeholder='Street Address' width={16} name="StreetAddress" onChange={this.onChange} />
                        <Form.Input fluid label='Apt/Unit#' placeholder='Apt/Unit#' width={2} name="Apt" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group className="FormGroup" widths='equal'>
                        <Form.Input required fluid label='City' placeholder='City' width={8} name="City" onChange={this.onChange} />
                        <label htmlFor=""><strong>State</strong></label>
                        <br></br>
                        <Form.Select required className="State" fluid  options={states} placeholder='State'  width={2} name="State" onChange={this.stateChange}/>
                        <Form.Input required fluid label='ZipCode' placeholder='ZipCode' width={3} name="ZipCode" onChange={this.onChange}/>
                    </Form.Group>

                    <label htmlFor=""><strong>Birthdate</strong></label>
                    <Form.Group required>
                        <Form.Select required className="Month" fluid  options={months} placeholder='Month'  width={2} name="Month" onChange={this.monthChange}/>
                        <Form.Select required className="Day" fluid options={dates} placeholder='Day'  width={2} name="Day" onChange={this.dayChange}/>
                        <Form.Select required className="Year" fluid options={years} placeholder='Year'  width={2} name="Year" onChange={this.yearChange}/>
                        <Form.Select required className="Gender" fluid  options={options} placeholder='Gender'  width={2} name="Gender" onChange={this.genderChange} />                    
                    </Form.Group>

                    <Form.Field className="formButton" color="red" control={Button}> Look up my Status </Form.Field>
                </Form>   
                
                <div className="registrationResult"> 
                    {this.state.Voter && result || this.state.Voter === false && result}
                </div>
                
            </Container>

        )
    }
}
    
export default RegistrationStatusPage


// To do:
// * find a nice form for persons to enter their information 
// * develop search methods to parse the database - need to have some matches or similarly close matches 
// * validation check if you're registered and redirect if you're not 


import React from 'react';
import { Form, Container} from 'semantic-ui-react';

import './RegistrationStatusPage.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]

const states = [                       
    {key:'Alabama', text: 'Alabama', value: 'Alabama'},
    {key:'Alaska', text: 'Alaska', value: 'Alaska'},
    {key:'Arizona', text: 'Arizona', value: 'Arizona'},
    {key:'Arkansas', text: 'Arkansas', value: 'Arkansas'},
    {key:'California', text: 'California', value: 'California'},
    {key:'Colorado', text: 'Colorado', value: 'Colorado'},
    {key:'Connecticut', text: 'Connecticut', value: 'Connecticut'},
    {key:'Delaware', text: 'Delaware', value: 'Delaware'},
    {key:'District Of Columbia', text: 'District Of Columbia', value: 'District Of Columbia'},
    {key:'Florida', text: 'Florida', value: 'Florida'},
    {key:'Georgia', text: 'Georgia', value: 'Georgia'},
    {key:'Hawaii', text: 'Hawaii', value: 'Hawaii'},
    {key:'Idaho', text: 'Idaho', value: 'Idaho'},
    {key:'Illinois', text: 'Illinois', value: 'Illinois'},
    {key:'Indiana', text: 'Indiana', value: 'Indiana'},
    {key:'Iowa', text: 'Iowa', value: 'Iowa'},
    {key:'Kansas', text: 'Kansas', value: 'Kansas'},
    {key:'Kentucky', text: 'Kentucky', value: 'Kentucky'},
    {key:'Louisiana', text: 'Louisiana', value: 'Louisiana'},
    {key:'Maine', text: 'Maine', value: 'Maine'},
    {key:'Maryland', text: 'Maryland', value: 'Maryland'},
    {key:'Massachusetts', text: 'Massachusetts', value: 'Massachusetts'},
    {key:'Michigan', text: 'Michigan', value: 'Michigan'},
    {key:'Minnesota', text: 'Minnesota', value: 'Minnesota'},
    {key:'Mississippi', text: 'Mississippi', value: 'Mississippi'},
    {key:'Missouri', text: 'Missouri', value: 'Missouri'},
    {key:'Montana', text: 'Montana', value: 'Montana'},
    {key:'Nebraska', text: 'Nebraska', value: 'Nebraska'},
    {key:'Nevada', text: 'Nevada', value: 'Nevada'},
    {key:'New Hampshire', text: 'New Hampshire', value: 'New Hampshire'},
    {key:'New Jersey', text: 'New Jersey', value: 'New Jersey'},
    {key:'New Mexico', text: 'New Mexico', value: 'New Mexico'},
    {key:'New York', text: 'New York', value: 'New York'},
    {key:'North Carolina', text: 'North Carolina', value: 'North Carolina'},
    {key:'North Dakota', text: 'North Dakota', value: 'North Dakota'},
    {key:'Ohio', text: 'Ohio', value: 'Ohio'},
    {key:'Oklahoma', text: 'Oklahoma', value: 'Oklahoma'},
    {key:'Oregon', text: 'Oregon', value: 'Oregon'},
    {key:'Pennsylvania', text: 'Pennsylvania', value: 'Pennsylvania'},
    {key:'Rhode Island', text: 'Rhode Island', value: 'Rhode Island'},
    {key:'South Carolina', text: 'South Carolina', value: 'South Carolina'},
    {key:'South Dakota', text: 'South Dakota', value: 'South Dakota'},
    {key:'Tennessee', text: 'Tennessee', value: 'Tennessee'},
    {key:'Texas', text: 'Texas', value: 'Texas'},
    {key:'Utah', text: 'Utah', value: 'Utah'},
    {key:'Vermont', text: 'Vermont', value: 'Vermont'},
    {key:'Virginia', text: 'Virginia', value: 'Virginia'},
    {key:'Washington', text: 'Washington', value: 'Washington'},
    {key:'West Virginia', text: 'West Virginia', value: 'West Virginia'},
    {key:'Wisconsin', text: 'Wisconsin', value: 'Wisconsin'},
    {key:'Wyoming', text: 'Wyoming', value: 'Wyoming'}                  
]

const months = [
    { key: 1, text: 'January', value: 1 },
    { key: 2, text: 'Febuary', value: 2 },
    { key: 3, text: 'March', value: 3 },
    { key: 4, text: 'April', value: 4 },
    { key: 5, text: 'May', value: 5 },
    { key: 6, text: 'June', value: 6 },
    { key: 7, text: 'July', value: 7 },
    { key: 8, text: 'August', value: 8 },
    { key: 9, text: 'September', value: 9 },
    { key: 10, text: 'October', value: 10 },
    { key: 11, text: 'November', value: 11 },
    { key: 12, text: 'December', value: 12 }
]

const dates = [
    { key: 1, text: 1 ,value: 1 },
    { key: 2, text: 2 ,value: 2 },
    { key: 3, text: 3 ,value: 3 },
    { key: 4, text: 4 ,value: 4 },
    { key: 5, text: 5 ,value: 5 },
    { key: 6, text: 6 ,value: 6 },
    { key: 7, text: 7 ,value: 7 },
    { key: 8, text: 8 ,value: 8 },
    { key: 9, text: 9 ,value: 9 },
    { key: 10, text: 10 ,value: 10 },
    { key: 11, text: 11 ,value: 11 },
    { key: 12, text: 12 ,value: 12 },
    { key: 13, text: 13 ,value: 13 },
    { key: 14, text: 14 ,value: 14 },
    { key: 15, text: 15 ,value: 15 },
    { key: 16, text: 16 ,value: 16 },
    { key: 17, text: 17 ,value: 17 },
    { key: 18, text: 18 ,value: 18 },
    { key: 19, text: 19 ,value: 19 },
    { key: 20, text: 20 ,value: 20 },
    { key: 21, text: 21 ,value: 21 },
    { key: 22, text: 22 ,value: 22 },
    { key: 23, text: 23 ,value: 23 },
    { key: 24, text: 24 ,value: 24 },
    { key: 25, text: 25 ,value: 25 },
    { key: 26, text: 26 ,value: 26 },
    { key: 27, text: 27 ,value: 27 },
    { key: 28, text: 28 ,value: 28 },
    { key: 29, text: 29 ,value: 29 },
    { key: 30, text: 30 ,value: 30 },
    { key: 31, text: 31 ,value: 31 },
]

const years = [
    { key: 1900, text: 1900 ,value: 1900 },
    { key: 1901, text: 1901 ,value: 1901 },
]



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
                <Form className="form" onSubmit={this.onSubmit}>
                    <Form.Group >
                    {console.log(this.state)}
                        <Form.Input fluid label='First Name' placeholder='First name' width={7} name="FirstName" onChange={this.onChange}  />
                        <Form.Input fluid label='Middle Initial' placeholder='Middle Initial' name="MiddleInitial" width={2} onChange={this.onChange}/>
                        <Form.Input fluid label='Last Name' placeholder='Last name' name="LastName" width={7} onChange={this.onChange}/>
                    </Form.Group>
                
                    <Form.Group >
                        <Form.Input fluid label='Street Address' placeholder='Street Address' width={16} name="StreetAddress" onChange={this.onChange} />
                        <Form.Input fluid label='Apt/Unit#' placeholder='Apt/Unit#' width={2} name="Apt" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group >
                        <Form.Input fluid label='City' placeholder='City' width={8} name="City" onChange={this.onChange} />
                        <label htmlFor=""><strong>Birthdate</strong></label>
                        <br></br>
                        <Form.Select className="State" fluid  options={states} placeholder='State'  width={2} name="State" onChange={this.stateChange}/>
                        <Form.Input fluid label='Zip' placeholder='Zip' width={3} name="Zip" onChange={this.onChange}/>
                    </Form.Group>

                    <label htmlFor=""><strong>Birthdate</strong></label>
                    <Form.Group  >
                        <Form.Select className="Month" fluid  options={months} placeholder='Month'  width={2} name="Month" onChange={this.monthChange}/>
                        <Form.Select className="Date" fluid options={dates} placeholder='Date'  width={2} name="Date" onChange={this.dateChange}/>
                        <Form.Select className="Year" fluid options={years} placeholder='Year'  width={2} name="Year" onChange={this.yearChange}/>
                        <Form.Select className="Gender" label="" fluid  options={options} placeholder='Gender'  width={2} name="Gender" onChange={this.genderChange}/>
                    </Form.Group>

                    <button className="ui inverted green button">Submit Form</button>
                    
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


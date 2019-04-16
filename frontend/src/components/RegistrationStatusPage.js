import React from 'react';
import { Form, Container} from 'semantic-ui-react';
import StateDropdown from './StateDropdown';

import './RegistrationStatusPage.css';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
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

const RegistrationStatusPage = () => (
    <Container className="container">
        <Form className="form">
            <Form.Group >
                <Form.Input fluid label='First name' placeholder='First name' width={6}  />
                <Form.Input fluid label='Middle Initial' placeholder='Middle Initial' width={2}/>
                <Form.Input fluid label='Last name' placeholder='Last name' width={6}/>
                <Form.Select className="gender" fluid options={options} placeholder='Gender'  width={2}/>
            </Form.Group>
           
            <Form.Group widths=''>
                <Form.Input fluid label='Street Address' placeholder='Street Address' width={16}  />
                <Form.Input fluid label='Apt/Unit#' placeholder='Apt/Unit#' width={2}/>
            </Form.Group>

            <Form.Group >
                <Form.Input fluid label='City' placeholder='City' width={6}  />
                <label htmlFor="state"><strong>State</strong></label>
                <StateDropdown />
                <Form.Input fluid label='Zip' placeholder='Zip' width={2}/>
            </Form.Group>

            <label htmlFor=""><strong>Birthdate</strong></label>
            <Form.Group className >
                <Form.Select className="Month" fluid  options={months} placeholder='Month'  width={2}/>
                <Form.Select className="Date" fluid options={dates} placeholder='Date'  width={2}/>
                <Form.Select className="Year" fluid options={years} placeholder='Year'  width={2}/>
            </Form.Group>
        </Form>   
    </Container>

 
)

export default RegistrationStatusPage


// To do:
// * find a nice form for persons to enter their information 
// * develop search methods to parse the database - need to have some matches or similarly close matches 
// * validation check if you're registered and redirect if you're not 


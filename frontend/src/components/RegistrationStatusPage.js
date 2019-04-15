import React from 'react'
import { Form, Container } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]

const years = [
    {key: 'years', text:[...Array(100).keys()]}
]

const RegistrationStatusPage = () => (
    <Container>
        <Form>
            <Form.Group >
                <Form.Input fluid label='First name' placeholder='First name' width={4}  />
                <Form.Input fluid label='Last name' placeholder='Last name' width={4}/>
                <Form.Select fluid label="Gender" options={options} placeholder='Gender'  width={2}/>
            </Form.Group>
            <Form.Group widths=''>
                <Form.Input fluid label='Street Address' placeholder='Street Address' width={8}  />
                <Form.Input fluid label='Apt/Unit#' placeholder='Apt/Unit#' width={2}/>
            </Form.Group>
            <Form.Group widths=''>
                <Form.Input fluid label='City' placeholder='City' width={6}  />
                <Form.Input fluid label='State' placeholder='State' width={2}/>
                <Form.Input fluid label='Zip' placeholder='Zip' width={2}/>
            </Form.Group>
            <Form.Group >
                <Form.Input fluid label='Month' placeholder='Month' width={4}  />
                <Form.Input fluid label='Date' placeholder='Date' width={4}/>
                <Form.Select fluid label="Year" options={years} placeholder='Year'  width={2}/>
            </Form.Group>
        </Form>   
    </Container>

 
)

export default RegistrationStatusPage


// To do:
// * find a nice form for persons to enter their information 
// * develop search methods to parse the database - need to have some matches or similarly close matches 
// * validation check if you're registered and redirect if you're not 


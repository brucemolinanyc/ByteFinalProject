import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class RegistrationPage extends React.Component{
  constructor(){
    super()

    this.state = {
      loggedIn: false,
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    const confirm = document.getElementById('confirm_password').value

    if(password === confirm){
        fetch('http://127.0.0.1:5000/create', {
          method: 'post',
          mode: "cors",
          headers: {"Content-Type": "application/json, Access-Control-Allow-Origin"},
          body: JSON.stringify({username: username, password_hash: password})
      }).then(response => response.json())
        .then(data => {
        localStorage.setItem('token', data['auth_token'])
    
        if(!!localStorage.token) {
          this.props.history.push('/home')
        }
      })
    }
  }

   

  render(){
    
    return(
      <div className='registration-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.registration-form {
        height: 100%;
      }
    `}
    </style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='red' textAlign='center'>
          <Image src='/logo.png' /> Create an account
        </Header>
        <Form size='large' onSubmit={this.onFormSubmit}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='username' id='username' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              id='password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              type='password'
              id='confirm_password'
            />

            <Button color='red' fluid size='large'>
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Already registered? <Link to="/">Log in</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    )
  }
}
  



export default RegistrationPage

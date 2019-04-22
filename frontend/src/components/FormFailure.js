import React from 'react'
import {Form, Message } from 'semantic-ui-react'


const FormFailure = () => (
  <Form error>
    <Message
      error
      header='User not found'
      content='Please click here to register your current address.'
    />
  </Form>
)

export default FormFailure
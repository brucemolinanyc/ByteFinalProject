import React from 'react'
import {Form, Message } from 'semantic-ui-react'

const FormSuccess = () => (
  <Form success>
    <Message success header='User found!' content="You are registered to vote in New York State!" />
  </Form>
)

export default FormSuccess
import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import './StateDropdown.css'

const addressDefinitions = faker.definitions.address
const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
  key: addressDefinitions.state_abbr[index],
  text: state,
  value: addressDefinitions.state_abbr[index],
}))

class StateDropdown extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      State: null
    }
  }
  
  stateChange = (e) => {
    const state = e.target.innerHTML.replace(`<span class="text">`,"").replace(`</span>`,"")
    this.setState({ State : state})
    console.log(this.state)
  }

  render(){
    return(
      <Dropdown className="dropdown" placeholder='State' search selection options={stateOptions} onChange={this.stateChange} />
    )
  }
}


export default StateDropdown
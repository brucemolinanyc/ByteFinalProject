import React from 'react';
import Header from './Header'
import { Table } from 'semantic-ui-react';
import './RepresentativesCard.css';

class RepresentativesCard extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount = () => {
        const fullName = this.props.match.url.split("/").slice(-1).join(" ")
        const firstName = this.props.match.url.split(/[\s,"/"]+/)[2].trim()
        const lastName = this.props.match.url.split(" ").slice(-1).join(" ").trim()
        var candidateId = null
        const candidate = fetch(`http://api.votesmart.org/Officials.getByLastname?key=e6c9d393d6cf259456bcb71e26922bcd&lastName=${lastName}&o=JSON`,{
            method: 'get',
            mode: "cors",
        })
        .then(response => response.json()) 
        .then(data => {
            console.log(data)
            // getting the candidateId for a person
            if(Array.isArray(data.candidateList.candidate)){
                candidateId = data.candidateList.candidate.filter( (el) => 
                (el.firstName === firstName)||(el.nickName === firstName))[0].candidateId
            } else {
                candidateId = data.candidateList.candidate.candidateId
            }
            console.log(candidateId)
        })
 
        // getting the candidates full bio
    }

    render(){
        return(
            <div className="representatives_container">
                <div className="header_class">
                    <Header/>
                </div>

                <div className="rep_container">
                    <p>i am a rep card</p>
                    <p>i am a rep card</p>
                    <p>i am a rep card</p>
                    <p>i am a rep card</p>
                    <p>i am a rep card</p>
                    {console.log(this.props)}
                    <p>from here call the other vote smart api with the name</p>
                </div>    
            </div>
        )
    }

}

export default RepresentativesCard;

import React from 'react';
import Header from './Header'
import { Table } from 'semantic-ui-react';
import './RepresentativesCard.css';

class RepresentativesCard extends React.Component{
   

    state = {
        bio: null,
        npat: null,
        ratings: null,
        votes: null,
        candidateId: null
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
            // getting the candidateId for a person
            if(Array.isArray(data.candidateList.candidate)){
                candidateId = data.candidateList.candidate.filter( (el) => 
                (el.firstName === firstName)||(el.nickName === firstName))[0].candidateId
                this.setState({candidateId: candidateId})
            } else {
                candidateId = data.candidateList.candidate.candidateId
                this.setState({candidateId: candidateId})
            }
            fetch(`http://api.votesmart.org/CandidateBio.getDetailedBio?key=e6c9d393d6cf259456bcb71e26922bcd&candidateId=${this.state.candidateId}&o=JSON`, {
                method: 'get',
                mode: 'cors'
            }).then(response => response.json())
            .then(bio => this.setState({bio:bio}))
            fetch(`http://api.votesmart.org/Npat.getNpat?key=e6c9d393d6cf259456bcb71e26922bcd&candidateId=${this.state.candidateId}&o=JSON`, {
                    method: 'get',
                    mode: 'cors'
                })  // getting the candidates npat
                .then(response => response.json())
                .then(npat => this.setState({npat:npat}))
            fetch(`http://api.votesmart.org/Rating.getCandidateRating?key=e6c9d393d6cf259456bcb71e26922bcd&candidateId=${this.state.candidateId}&o=JSON`, {
                    method: 'get',
                    mode: 'cors'
                })   //getting the candidates ratings
                .then(response => response.json())
                .then(ratings => this.setState({ratings:ratings})
            )
            fetch(`http://api.votesmart.org/Votes.getByOfficial?key=e6c9d393d6cf259456bcb71e26922bcd&candidateId=${this.state.candidateId}&o=JSON`, {
                method: 'get',
                mode: 'cors'
            })
                .then(response => response.json())
                .then(votes => this.setState({votes:votes}))
        } 
        )
    }

      

    render(){
        // {console.log(this.props)}
        return(
            <div>
            
            <div className="header_class">
                    <Header/>
            </div>
            
            <div className="representatives_container">
                

            <div className="personal_info">
            {console.log(this.state)}
                <p>from here call the other vote smart api with the name</p>
                {this.state.bio && this.state.bio.bio.candidate.firstName}
                {this.state.bio && this.state.bio.bio.candidate.firstName}
                {this.state.bio && this.state.bio.bio.candidate.firstName}

                {console.log(this.state.bio && this.state.bio.bio.firstName)}
            </div>    

            <div className="npat">
            
            </div>

            <div className="ratings">
            
            </div>

            <div className="votes">
            
            </div>
        </div>
            
            </div>
           
        )
    }

}

export default RepresentativesCard;

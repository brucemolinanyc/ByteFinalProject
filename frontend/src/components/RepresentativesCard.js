import React from 'react';
import { Table } from 'semantic-ui-react';
import './RepresentativesCard.css';

// const description = [
//   'Amy is a violinist with 2 years experience in the wedding industry.',
//   'She enjoys the outdoors and currently resides in upstate New York.',
// ].join(' ')

// const RepresentativesCard = (props) => (
//   <Card className="card">
//   {console.log(props.rep)}
//     <Image src={props.rep.photoUrl}/>
//     <Card.Content header={props.rep.name} />
//     <Card.Content description={description} />
//     <Card.Content extra>
//       <Icon name='user' />
//       4 Friends
//     </Card.Content>
//   </Card>
// )


const RepresentativesCard = (props) => (

    <table class="card">
        <thead>
            <tr>
                <th>Representative</th>
                <th>Office</th>
                <th>Address</th>
                <th>Links</th>
            </tr>
        </thead>
        <tbody>
            <tr>
<td>cell1_1</td><td>cell2_1</td><td>cell3_1</td><td>cell4_1</td></tr>
</tbody>
    </table>
  
)

export default RepresentativesCard;
// <h1>{props.rep.name}</h1>
// <p>{props.rep.party} </p>


// <div className="card">
// {console.log(props)}
// <img  height="100" width="100" src={props.official.photoUrl ? props.official.photoUrl : "https://us.123rf.com/450wm/sharpner/sharpner1702/sharpner170200005/71130029-waving-american-flag.jpg?ver=6"}></img>
// <h1>{props.official.name}</h1>
// <p>{props.offices && props.offices.name}</p>
// <p>{props.official.party}</p>


// </div>
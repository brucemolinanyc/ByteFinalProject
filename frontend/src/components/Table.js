import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'semantic-ui-react';


const Table = (props) => (
    
        <tbody>
        {console.log(props)}
            <tr>     
            <td>{<img  height="100" width="100" src={props.official.photoUrl ? props.official.photoUrl : "https://us.123rf.com/450wm/sharpner/sharpner1702/sharpner170200005/71130029-waving-american-flag.jpg?ver=6"}></img>} 
            <br></br>
            {props.specificOfficialName && props.specificOfficialName}({props.official.party && props.official.party.slice(0,1) === "R" ? <font color="red">R</font> : <font color="blue">D</font>})
            </td>
            <td>{props.specificOfficeName && props.specificOfficeName} </td>
            
            <td>
                {props.official.address && props.official.address[0].line1} <br></br>
                {props.official.address && props.official.address[0].line2} <br></br>
                {props.official.address && props.official.address[0].city + ","} {props.official.address && props.official.address[0].state} {props.official.address && props.official.address[0].zip}
                
            </td>
            <td>
            <Link to={`/representative/${props.specificOfficialName}`}>Profile</Link>
            </td>
            </tr>
            </tbody>
        
            

)

export default Table;
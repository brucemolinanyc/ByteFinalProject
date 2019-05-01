import React from 'react';

const Table = (props) => (
    <table className="table" >
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
            <td>{<img  height="100" width="100" src={props.official.photoUrl ? props.official.photoUrl : "https://us.123rf.com/450wm/sharpner/sharpner1702/sharpner170200005/71130029-waving-american-flag.jpg?ver=6"}></img>} 
            {props.official.name} &nbsp; ({props.official.party.slice(0,1) === "R" ? <font color="red">R</font> : <font color="blue">D</font>})
            </td>
            <td>{props.offices && props.offices.name} </td>
            <td>
            {props.official.address && props.official.address[0].line1} <br></br>
            {props.official.address && props.official.address[0].line2} <br></br>
            {props.official.address && props.official.address[0].city + ","} {props.official.address && props.official.address[0].state} {props.official.address && props.official.address[0].zip}

            </td>
            <td>cell4_1</td>
            </tr>
        </tbody>
</table>
)

export default Table;
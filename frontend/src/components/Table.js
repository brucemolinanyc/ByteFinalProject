import React from 'react';

const Table = (props) => (
    <table className="table" >
    {console.log(props)}
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
            <td>cell3_1</td>
            <td>cell4_1</td>
            </tr>
        </tbody>
</table>
)

export default Table;
import React, { useState } from 'react';
import Axios from 'axios';

function DeleteTeam() {

    // Accept Identify number
    // getPart doesn't use API, rather the database
    // Get names from first, second, third... assign to variables
    // Second function that takes names and uses them to access PokeAPI to get image URLs

    // Or edit database to have image URLs by default, so modify BuildTeamPut to put in image URLs
    
    const divStyle = {
        textAlign: 'center',
        margin: 'auto'
    };
    
    const titleCase = {
        textTransform: 'capitalize',
        paddingRight: '4px',
        paddingLeft: '4px'
    };

    const [Identify, setIdentify] = useState('');

    const deletePart = async () => {
        const response = await Axios.delete("http://localhost:45030/CarterFrost/" + Identify, {});
        // console.log(response.data);
        alert("Team deleted from database.");
    };

    return (
        <div style={divStyle}>
            <h1>Delete Team by ID Number</h1>
            <h3>ID Number</h3>
            <input type="text" onChange={event => setIdentify(event.target.value)}/>
            <br /><br />
            <button onClick={() => {deletePart()}}>Delete</button>
        </div>
    )

}

export default DeleteTeam;
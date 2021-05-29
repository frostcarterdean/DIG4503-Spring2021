import React, { useState } from 'react';
import Axios from 'axios';

function ShowCollection() {

    const divStyle = {
        textAlign: 'center',
        margin: 'auto'
    };
    
    const postPart = async () => {
        const response = await Axios.post("http://localhost:45030/CarterFrost", {});
        console.log(response.data);
    };

    return (
        <div style={divStyle}>
            <h1>Show Collection in Console</h1>
            <button onClick={() => {postPart()}}>Show</button>
        </div>
    )

}

export default ShowCollection;
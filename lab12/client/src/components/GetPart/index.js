import React, { useState } from 'react';
import Axios from 'axios';

function GetPart() {

    const divStyle = {
        textAlign: 'center'
    };
    
    const [ISBN, setISBN] = useState(''); // React Hook because it's a function component

    const readPart = async () => {
        const response = await Axios.get("http://localhost:45030/books/" + ISBN, {}); // const response = await Axios.get("http://localhost:45030/books/9781974719846", {});
        console.log(response.data);
    };

    return (
        <div style={divStyle}>
            <h1>Get by ISBN</h1>
            <input type="text" onChange={event => setISBN(event.target.value)} />
            <br /><br />
            <button onClick={() => {readPart()}}>Submit</button>
        </div>
    )

}

export default GetPart;
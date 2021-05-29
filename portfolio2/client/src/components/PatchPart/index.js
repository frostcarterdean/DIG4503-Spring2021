import React, { useState } from 'react';
import Axios from 'axios';

function PatchPart() {

    const divStyle = {
        textAlign: 'center'
    };
    
    const [ISBN, setISBN] = useState(''); // React Hook because it's a function component
    const [Title, setTitle] = useState('');
    const [Author, setAuthor] = useState('');
    const [Description, setDescription] = useState('');

    const updatePart = async () => {
        const response = await Axios.patch("http://localhost:45030/books/" + ISBN, { // const response = await Axios.get("http://localhost:45030/books/9781974719846", {});
            title: Title,
            author: Author,
            description: Description
        }); 
        console.log(response.data);
    };

    return (
        <div style={divStyle}>
            <h1>Patch by ISBN</h1>
            <h3>ISBN</h3>
            <input type="text" onChange={event => setISBN(event.target.value)} />
            <br /><br />
            <h3>Title</h3>
            <input type="text" onChange={event => setTitle(event.target.value)} />
            <br /><br />
            <h3>Author</h3>
            <input type="text" onChange={event => setAuthor(event.target.value)} />
            <br /><br />
            <h3>Description</h3>
            <input type="text" onChange={event => setDescription(event.target.value)} />
            <br /><br />
            <button onClick={() => {updatePart()}}>Submit</button>
        </div>
    )

}

export default PatchPart;
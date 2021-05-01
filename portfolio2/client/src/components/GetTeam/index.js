import React, { useState } from 'react';
import Axios from 'axios';

function GetTeam() {

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
    
    const [NameFirst, setNameFirst] = useState('');

    const [NameSecond, setNameSecond] = useState('');
    const [NameThird, setNameThird] = useState('');
    const [NameFourth, setNameFourth] = useState('');
    const [NameFifth, setNameFifth] = useState('');
    const [NameSixth, setNameSixth] = useState('');

    const [TeamName, setTeamName] = useState('');

    const getPart = async () => {
        const response = await Axios.get("http://localhost:45030/CarterFrost/" + Identify, {});
        // console.log(response.data);
        setNameFirst(response.data.first);
        setNameSecond(response.data.second);
        setNameThird(response.data.third);
        setNameFourth(response.data.fourth);
        setNameFifth(response.data.fifth);
        setNameSixth(response.data.sixth);
        setTeamName(response.data.name);
    };

    return (
        <div style={divStyle}>
            <h1>Get Team by ID Number</h1>
            <h3>ID Number</h3>
            <input type="text" onChange={event => setIdentify(event.target.value)}/>
            <br /><br />
            <button onClick={() => {getPart()}}>Get</button>
            <h3>{TeamName}</h3>
            <table style={divStyle}>
                <tbody>
                    <tr>
                        <td>
                            <div><p style={titleCase}>{NameFirst}</p></div>
                        </td>
                        <td>
                            <div><p style={titleCase}>{NameSecond}</p></div>
                        </td>
                        <td>
                            <div><p style={titleCase}>{NameThird}</p></div>
                        </td>
                        <td>
                            <div><p style={titleCase}>{NameFourth}</p></div>
                        </td>
                        <td>
                            <div><p style={titleCase}>{NameFifth}</p></div>
                        </td>
                        <td>
                            <div><p style={titleCase}>{NameSixth}</p></div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
        </div>
    )

}

export default GetTeam;
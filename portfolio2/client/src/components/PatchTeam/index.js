import React, { useState } from 'react';
import Axios from 'axios';

function PatchTeam() {

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

    const patchPart = async () => {
        const response = await Axios.patch("http://localhost:45030/CarterFrost/" + Identify, {
            first: NameFirst.toLowerCase(),
            second: NameSecond.toLowerCase(),
            third: NameThird.toLowerCase(),
            fourth: NameFourth.toLowerCase(),
            fifth: NameFifth.toLowerCase(),
            sixth: NameSixth.toLowerCase(),
            name: TeamName
        });
        // console.log(response.data);
        alert("Team successfully edited.");
    };

    return (
        <div style={divStyle}>
            <h1>Patch Team by ID Number</h1>
            <h3>ID Number</h3>
            <input type="text" onChange={event => setIdentify(event.target.value)}/>
            <h3>Team Name</h3>
            <input type="text" onChange={event => setTeamName(event.target.value)}/>
            
            <h3>Team</h3>
            <table style={divStyle}>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <input type="text" onChange={event => setNameFirst(event.target.value)}/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="text" onChange={event => setNameSecond(event.target.value)}/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="text" onChange={event => setNameThird(event.target.value)}/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="text" onChange={event => setNameFourth(event.target.value)}/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="text" onChange={event => setNameFifth(event.target.value)}/>
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="text" onChange={event => setNameSixth(event.target.value)}/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button onClick={() => {patchPart()}}>Patch</button>
        </div>
    )

}

export default PatchTeam;
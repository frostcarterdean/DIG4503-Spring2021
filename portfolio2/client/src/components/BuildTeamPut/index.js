import React, { useState } from 'react';
import Axios from 'axios';

function BuildTeamPut() {

    const divStyle = {
        textAlign: 'center',
        margin: 'auto'
    };
    
    const [NumberSelection, setNumberSelection] = useState('');

    const [Name, setName] = useState(''); // React Hook because it's a function component
    const [ImageFirst, setImageFirst] = useState('');

    const [ImageSecond, setImageSecond] = useState('');
    const [ImageThird, setImageThird] = useState('');
    const [ImageFourth, setImageFourth] = useState('');
    const [ImageFifth, setImageFifth] = useState('');
    const [ImageSixth, setImageSixth] = useState('');

    const [NameFirst, setNameFirst] = useState('');

    const [NameSecond, setNameSecond] = useState('');
    const [NameThird, setNameThird] = useState('');
    const [NameFourth, setNameFourth] = useState('');
    const [NameFifth, setNameFifth] = useState('');
    const [NameSixth, setNameSixth] = useState('');

    const [Identify, setIdentify] = useState();
    const [TeamName, setTeamName] = useState('');

    const readPart = async () => {
        const response = await Axios.get("https://pokeapi.co/api/v2/pokemon/" + Name.toLowerCase(), {});
        // console.log(response.data);
        // console.log(NumberSelection);

        if (NumberSelection == 1) { 
            setImageFirst(response.data.sprites.front_default);
            setNameFirst(response.data.name);
        } else if (NumberSelection == 2) {
            setImageSecond(response.data.sprites.front_default);
            setNameSecond(response.data.name);
        } else if (NumberSelection == 3) {
            setImageThird(response.data.sprites.front_default);
            setNameThird(response.data.name);
        } else if (NumberSelection == 4) {
            setImageFourth(response.data.sprites.front_default);
            setNameFourth(response.data.name);
        } else if (NumberSelection == 5) {
            setImageFifth(response.data.sprites.front_default);
            setNameFifth(response.data.name);
        } else if (NumberSelection == 6) {
            setImageSixth(response.data.sprites.front_default);
            setNameSixth(response.data.name);
        }
    };

    const createPart = async () => {
        const response = await Axios.put("http://localhost:45030/CarterFrost/" + Identify, { // const response = await Axios.get("http://localhost:45030/books/9781974719846", {});
            first: NameFirst.toLowerCase(),
            second: NameSecond.toLowerCase(),
            third: NameThird.toLowerCase(),
            fourth: NameFourth.toLowerCase(),
            fifth: NameFifth.toLowerCase(),
            sixth: NameSixth.toLowerCase(),
            name: TeamName
        }); 
        // console.log(response.data);
        alert("Team successfully saved to database.")
    };

    return (
        <div style={divStyle}>
            <h1>Pokemon Team Builder</h1>
            <br /><br />
            <table style={divStyle}>
                <tbody>
                    <tr>
                        <td>
                            <div><img src={ImageFirst}></img></div>
                            <input type="text" onFocus={event => setNumberSelection(1)} onChange={event => setName(event.target.value)} />
                        </td>
                        <td>
                            <div><img src={ImageSecond}></img></div>
                            <input type="text" onFocus={event => setNumberSelection(2)} onChange={event => setName(event.target.value)} />
                        </td>
                        <td>
                            <div><img src={ImageThird}></img></div>
                            <input type="text" onFocus={event => setNumberSelection(3)} onChange={event => setName(event.target.value)} />
                        </td>
                        <td>
                            <div><img src={ImageFourth}></img></div>
                            <input type="text" onFocus={event => setNumberSelection(4)} onChange={event => setName(event.target.value)} />
                        </td>
                        <td>
                            <div><img src={ImageFifth}></img></div>
                            <input type="text" onFocus={event => setNumberSelection(5)} onChange={event => setName(event.target.value)} />
                        </td>
                        <td>
                            <div><img src={ImageSixth}></img></div>
                            <input type="text" onFocus={event => setNumberSelection(6)} onChange={event => setName(event.target.value)} />
                        </td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button onClick={() => {readPart()}}>Enter</button>
            <h3>Team Name</h3>
            <input type="text" onChange={event => setTeamName(event.target.value)}/>
            <br /><br />
            <h3>ID Number</h3>
            <input type="text" onChange={event => setIdentify(event.target.value)}/>
            <br /><br />
            <button onClick={() => {createPart()}}>Save Team to Database</button>
        </div>
    )

}

export default BuildTeamPut;
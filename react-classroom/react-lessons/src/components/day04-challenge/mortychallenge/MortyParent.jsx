// import this in App.jsx

// create button that will fetch ... 

// url API to use: https://rickandmortyapi.com/api/character https://rickandmortyapi.com/documentation

// console log char and save to useState var 

import React, { useState, useEffect } from 'react';
import { CardColumns } from 'reactstrap';
import MortyChild from './MortyChild';

const MorthyParent = (props) => {

    const url = 'https://rickandmortyapi.com/api/character';
    const [character, setCharacter] = useState([]);

    const fetchURL = async () => {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.results[0])
        setCharacter(data.results);
        console.log(character);

    };
    
    const handleClick = () => {
        fetchURL();
    };

    const displayCards = () => character.map((char) => <MortyChild char={char}/>) 

    return ( 
        <div>
            Hello from Morty Parent <br />
            <button onClick={handleClick}>Click here for character</button>
            <CardColumns>{displayCards()}</CardColumns>
        </div>
     );
}
 
export default MorthyParent;
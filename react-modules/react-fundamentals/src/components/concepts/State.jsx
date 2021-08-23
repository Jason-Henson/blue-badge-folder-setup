import React, { useState } from 'react';

const State = (props) => {
    return ( 
        <div className="main">
            <div className="mainDiv">
                <ul>
                    <dt>useState is Unique to Functional Components</dt>
                        <dd>Class components have a seperate means of using and changing state.</dd>
                    <dt>useState Uses Array Destructuring</dt>
                        <dd>useState provides a state variable and a setState functction</dd>
                    <dt>useState is a Hook</dt>
                        <dd>useState is a hook baked into React</dd>
                    <dt>Triggers Re-renders</dt>
                        <dd>Like with props changes, changing the state of a component re-renders the whole component.</dd>
                </ul>
                <StateExample />   
            </div>
        </div>
      );
};
 
export default State;

function StateExample () {
    const [text, setText] = useState('initial value');
    const [likeNum, setLikeNum] = useState(0);
    const [textColor, setTextColor] = useState('blue');

    return(
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <br />
            <img
            style={{ width: '100px', height: '100px' }}
            src="https://upload.wikimedia.org/wikipedia/commons/1/13/Facebook_like_thumb.png"
            onClick={e => setLikeNum(likeNum + 1 )}
            />
            {/* p tag challenge make p tag turn form blue to red when the mouse hovers over it */}
            <p
            style={{ color: textColor }}
            onMouseEnter={e => setTextColor('red')}
            onMouseLeave={e => setTextColor('blue')}            
            >
                This the color change challenge
            </p>
        </div>
    );
};
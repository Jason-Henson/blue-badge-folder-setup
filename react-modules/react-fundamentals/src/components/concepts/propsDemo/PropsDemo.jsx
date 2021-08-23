import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; 

const PropsDemo = () => {
    const [color, setColor] = useState('white');
    const [backgroundColor, setBackgroundColor] = useState('purple');
    const [borderRadius, setBorderRadius] = useState('5px');
    const [borderStyle, setBorderStyle] = useState('dashed');
    const [display, setDisplay] = useState('inline-block');
    const [width, setWidth] = useState('350px');
    const [textAlign, setTextAlign] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    };

    const toggleBackgroundColor = () => {
        backgroundColor === 'purple' ? setBackgroundColor('green') : setBackgroundColor('purple');
    }

    return ( 
        <div className="main">
            <div className="mainDiv">
                <div style={styles}>
                <FunctionalComponent string="will this dispally?" function={toggleColor} changeBG={toggleBackgroundColor} selectedStyle={ color } />
                <FunctionalComponent string="this is the second one - 2" function={toggleColor} changeBG={toggleBackgroundColor} selectedStyle={ backgroundColor }  />
                <FunctionalComponent string="this is teh thrid one - 3" function={toggleColor} changeBG={toggleBackgroundColor} selectedStyle={ borderRadius }  />
                <FunctionalComponent string="this is the fourth one - 4" function={toggleColor} changeBG={toggleBackgroundColor} selectedStyle={ borderStyle }  />
                </div>
            </div>
        </div>
     );
};
 
export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Press Me</button>
            <button onClick={props.changeBG}>Change Background</button>
            <TinyComponent selectedStyle={props.selectedStyle } />
            
        </div>
    );
};

const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is : { props.selectedStyle }</p>
        </div>
    );
};

FunctionalComponent.defaultProps = { 
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'), 
    selectedStyle: 'what sytle??'
};


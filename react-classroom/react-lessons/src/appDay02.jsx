import './App.css';
import PresidentParent from './components/day02-challenge/Presidents/PresidentParent';
import ParentComponent from './components/day02-challenge/Votes/ParentComponent';
import ClickCounter from './components/day02-challenge/ClickCounter/ClickCounter';

function App(props) {

const welcomeName = "Jason!!";

const phrase = "I wasn't born then";
  return (
    <div className="App">
        <h1>Welcome to React, {welcomeName}</h1> 
        {/* <ParentComponent phrase={phrase} /> 
        <PresidentParent />    */}
        <ClickCounter />
    </div>
  );
}

export default App;

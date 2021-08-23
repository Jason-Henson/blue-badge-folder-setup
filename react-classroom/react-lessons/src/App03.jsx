import './App.css';
import Calculator from './components/day03-challenge/calculator/calculator';
import InputField from './components/day03-challenge/inputFieldDemo/inputField';
import TenLittleMonkeys from './components/day03-challenge/TenLittleMonkeys';

function App(props) {

const welcomeName = "Jason!!";

const phrase = "I wasn't born then";
  return (
    <div className="App">
        <h1>Welcome to React, {welcomeName}</h1>
        {/* <TenLittleMonkeys /> */}
        {/* <InputField />   */}
        <Calculator />
    </div>
  );
}

export default App;

import './App.css';
import ChuckFetch from './components/day04-challenge/chuckfetch/ChuckFetch';
import UseEffectPractice from './components/day04-challenge/useEffectPractice.jsx/UseEffectPractice';
import MorthyParent from './components/day04-challenge/mortychallenge/MortyParent';

function App(props) {

const welcomeName = "Jason!!";

const phrase = "I wasn't born then";
  return (
    <div className="App">
        <h1>Welcome to React, {welcomeName}</h1>
        {/* <TenLittleMonkeys /> */}
        {/* <InputField />   */}
        {/* <Calculator /> */}
        {/* <UseEffectPractice /> */}
        {/* <ChuckFetch /> */}
        <MorthyParent />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./components/day01-challenge/Header";
import AboutMe from './components/day01-challenge/AboutMe';
import StudentInformation from './components/day01-challenge/StudentInformation';
import Footer from './components/day01-challenge/Footer';

function App() {
const welcomeName = "Jason!!";
  return (
    <div>
      <div className="App">
        <h1>Welcome to React, {welcomeName}</h1>
        <h2>We just modified our root App component</h2>
        {/* This how you make a comment */}
        <Header />
        <AboutMe />
        <StudentInformation studentName="Pam" grade="A" subject="math"/>
        <StudentInformation studentName="Tom" grade="B" subject="math"/>
        <StudentInformation studentName="Frank" grade="C" subject="math"/>
        <Footer />     
      </div>   
    </div>
  );
}

export default App;

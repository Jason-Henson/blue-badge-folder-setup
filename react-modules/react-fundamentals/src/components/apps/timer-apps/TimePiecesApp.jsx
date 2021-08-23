import TimerApp from './TimerApp';
// import ClockApp from './Clockapp';
// import StopWatchApp from './StopwatchApp';


const TimePiecesApp = (props) => {
    return ( 
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                <hr />
                {/* < ClockApp /> */}
                <hr />
                {/* <StopWatchApp />  */}
            </div>            
        </div>
     );
};
 
export default TimePiecesApp;
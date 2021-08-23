import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1>Welcome to React Fundamentals a Eleven Fifty</h1>

                <p>
                    This app is intended to be a starter/tutorial app for you upcoming project and a learning andbox for you in months and years to come should you continue to develop software with React.  In htis application we will work through some of hte basic REeact concepts, build out some small applictions, and then unleash you to build your own applicaitons. 
                </p>
                <hr />
                <h1>Important Notes</h1>
                <ul>
                    <li>Being component based, yuou can move on to the next module</li>
                    <li>The stiling is intentionally bland in some spots. Just a sandbox</li>
                    <li>At this phase, this site is not yet responsive</li>
                    <li>Refactor the text on this page and make this your own portfolio project</li>
                    <li>This app simply scratches the surface on what is possible with React.</li>
                    <li>We hhave tried to collect the very best resources for this app, and we have cited those
                        <Link to="/resources">here</Link>.
                    </li>
                    <li>The set for this app might be the most confusing part.  Hang in there...</li>
                    <li>
                        <Link to="/resources">React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home; 
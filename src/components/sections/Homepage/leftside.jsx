// import classes from 'leftside.module.css';
const Leftside = () => {
    const DATA = [
        {
        'name': "Hello my name is Alexis Ismael Quintuna Uzhca",
        'subname': "Or Alex for short",
        'text': "A Junior Developer",
        'githubURL': "https://github.com/alexisquintuna",
        'linkedinURl': "www.linkedin.com/in/alexis-quintuna",
        'resumeURL': "../../images/resume"
    }]
    return (
        <div className="App">
            {Object.keys(DATA).map((keys)=> {return <h1>{DATA[keys].name}</h1>})}
            {Object.keys(DATA).map((keys)=> {return <h2>{DATA[keys].subname}</h2>})}
            {Object.keys(DATA).map((keys)=> {return <p>{DATA[keys].text}</p>})}
            {Object.keys(DATA).map((keys)=> {return <a rel="noreferrer" target="_blank" href="https://github.com/alexisquintuna">GitHub</a>})}
            {Object.keys(DATA).map((keys)=> {return <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/alexis-quintuna">LinkedIn</a>})}
            {Object.keys(DATA).map((keys)=> {return <a rel="noreferrer" target="_blank" href="../../images/resume">Resume</a>})}
        </div>
      );
};

export default Leftside;
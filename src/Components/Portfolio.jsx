import screen from "../assets/react.svg";
import './portfolio.css';

function Portfolio(props) {
  
return (
    <>
    
      <div className="container">
        <h2 className="card-title">{props.title}</h2>
        <img src={screen} className="img" alt="Placeholder" />
        <a href={props.link} className="link">Github link</a>
        <p className="card-text">For this project I used: {props.skills}</p>
        <p className="card-text">This project is {props.summary}</p>
        <p className="card-text">I learned {props.learned}</p>
        <p className="card-text">The biggest challenge was {props.challenges}</p>
      </div>
  
    </>
  );
  }

export default Portfolio;
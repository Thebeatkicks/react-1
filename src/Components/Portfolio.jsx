import screen from "../assets/react.svg";
import './portfolio.css';

function Portfolio() {
return (
    <>
    
      <div className="container">
        <h2 className="card-title">Test page</h2>
        <img src={screen} className="img" alt="Placeholder" />
        <a href="https://github.com/thebeatkicks" className="link">Github link</a>
        <p className="card-text">For this project I used: HTML, CSS, JS, REACT</p>
        <p className="card-text">This project is xxx</p>
        <p className="card-text">I learned xxx</p>
        <p className="card-text">This project is xxx</p>
        <p className="card-text">The biggest challenge was xxx</p>
      </div>
  
    </>
  );
  }

export default Portfolio;
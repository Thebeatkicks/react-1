import Portfolio from "./Components/Portfolio.jsx";

function App() {
  return (
    <>
    <div className="header">
      <h1 className="title">My Portfolio</h1>
      <p className="text">This is my portfolio</p>
    </div>
    <div className="container-row">
      <Portfolio  title="Test"
                  skills = "HTML, CSS"
                  summary = "a practice project to learn JS"
                  learned = "how to use React"
                  challenges = "how to use React Router" 
                  link = "http://github.com"> 
      </Portfolio> 
      <Portfolio  title="Test"
                  skills = "HTML, CSS, JS, REACT"
                  summary = "a practice project to learn JS"
                  learned = "how to use React"
                  challenges = "how to use React Router" 
                  link = "http://github.com"> 
        </Portfolio> 
        <Portfolio  title="Test"
                  skills = "HTML, CSS, JS, REACT"
                  summary = "a practice project to learn JS"
                  learned = "how to use React"
                  challenges = "how to use React Router" 
                  link = "http://github.com"> 
        </Portfolio> 
    </div>
    </>
  );
}
 
export default App;

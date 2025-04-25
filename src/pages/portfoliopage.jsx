import Portfolio from "../Components/Portfolio.jsx";

function Portfoliopage() {
  return (
    <>
    <div className="header">
      <h1 className="title">My Portfolio</h1>
      <p className="text">This is my portfolio</p>
    </div>
    <div className="container-row">
      <Portfolio  title="Test my skills"
                  skills = "HTML, CSS, pre-processor"
                  summary = "a project I did to recreate a website from a figma design"
                  learned = "how to use pre-processors"
                  challenges = "how to work with a hard deadline. Preposessor was new to me and in what order you do things" 
                  link = "https://github.com/Thebeatkicks/test-your-skills"> 
      </Portfolio> 
      <Portfolio  title="Genesis"
                  skills = "HTML, CSS"
                  summary = "the first project I did that was a bit more advanced. I used a figma design to recreate a website"
                  learned = "how to use flexbox and grid"
                  challenges = "it was hard to get the design right. I had to learn how to use flexbox and grid" 
                  link = "https://github.com/Thebeatkicks/genesis"> 
        </Portfolio> 
        <Portfolio  title="React-app-1"
                  skills = "HTML, CSS, JS, REACT"
                  summary = "a practice project to learn JS and React."
                  learned = "how to use React, how to set up a project with React, how to use components and props"
                  challenges = "how to troubleshooting errors in React." 
                  link = "https://github.com/Thebeatkicks/react-1"> 
        </Portfolio> 
    </div>
    </>
  );
}

export default Portfoliopage;
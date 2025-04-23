import Portfolio from "./Components/Portfolio.jsx";

function App() {
  return (
    <>
    <div>
      <h1 className="title">My Portfolio</h1>
      <p className="text">This is my portfolio</p>
    </div>
    <div className="container-row">
      <Portfolio></Portfolio> 
      <Portfolio></Portfolio> 
      <Portfolio></Portfolio> 
    </div>
    </>
  );
}
 
export default App;

import { Link } from "react-router-dom";

function Navbar () {
  return (
    <div className="navbar">
        <nav>
        <h1 className="text-3xl font-bold underline">
   Henrik Martini
  </h1> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact me</Link></li>
            </ul>
        </nav>
    </div>
  );
}   

export default Navbar;

import { Link } from "react-router-dom";

function Header()
{
    return(

<header> 
{/* <Link to='/'> <img id="fabbanklogo" src={logo}/></Link> */}
<h1> My Movie</h1>
          <nav>
          {/* <Link to='/Dashboard'>Dashboard</Link> */}
          
          <Link to=''>All List</Link>
          <Link to=''>Top 10</Link>
           
          </nav>
          </header> 


    );
    
}

export default Header;

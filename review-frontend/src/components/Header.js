
import { Link } from "react-router-dom";

function Header()
{
    return(

<header> 
{/* <Link to='/'> <img id="fabbanklogo" src={logo}/></Link> */}
<h1> My Movie</h1>
          <nav>
          {/* <Link to='/Dashboard'>Dashboard</Link> */}
          <Link to='/' >Home</Link>
          <Link to='/Detail' >Details</Link>
                    <Link to='/Review' >Review</Link>
           
          </nav>
          </header> 


    );
    
}

export default Header;

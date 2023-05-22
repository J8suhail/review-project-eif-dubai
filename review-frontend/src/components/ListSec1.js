import { Link } from "react-router-dom";
function  ListSec1(props){
    return (
     
        <div id='MoviesList'>
        <div className="child" id="child1">
                 <div>
                <img  className="img-responsive" src={props.imageName} />
                </div>
          <div class="para">
                <h3>{props.MName}</h3>
        
              
                <p>{props.Mdescription}</p>
                <br/>
                <br/>
               <Link to='/Detail'>  <button> View Details </button></Link>
               <br/>
                <br/>
               <Link to='/Review'>  <button> Add Review </button></Link>
                
                </div>
          </div>      
          </div>
          
     
        );
    }
    
export default ListSec1;
    
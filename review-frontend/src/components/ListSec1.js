import { Link } from "react-router-dom";
function  ListSec1(props){
    return (
        <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
            <div className="pricing-plan">
                <div className="pricing-month">
                <img  className="img-responsive" src={props.imageName} />
                </div>
                <div className="pricing-title">
                <h3>{props.MName}</h3>
        
                </div>
                <p>{props.Mdescription}</p>
                <div> <Link to='/Detail'>  <button> View Details </button></Link></div>
                <div> <Link to='/Review'>  <button> Add Review </button></Link></div>
                
                
            </div>
        </div>
        );
    }
    
export default ListSec1;
    
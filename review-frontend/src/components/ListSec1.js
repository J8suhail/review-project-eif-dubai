import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


function  ListSec1(){
    // make container
const [allItems, setAllItems] = useState("");
useEffect(()=>{
    axios.get("http://localhost:7000/getItems")
    .then((res)=>{setAllItems(res.data)})
},[]);

    return (
        <>
        {
             allItems && allItems.map((item)=>(
        <div id='MoviesList'>
        <div className="child" id="child1">
                 <div>
                <img  className="img-responsive" src={item.imageLink } />
                </div>
          <div class="para">
                <h3>{item.name}</h3>
        
              
                <p>{item.description}</p>
                <br/>
                <br/>
               <Link to='/Detail'>  <button> View Details </button></Link>
               <br/>
                <br/>
               <Link to='/Review'>  <button> Add Review </button></Link>
                
                </div>
          </div>      
          </div>
          
          ))
        }
                </>
                );
            }
            
    
export default ListSec1;
    
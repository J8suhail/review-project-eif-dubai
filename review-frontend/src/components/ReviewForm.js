function  ReviewForm(props){
    return (
<>
<header class="ScriptHeader">
    <div class="rt-container">
    	<div class="col-rt-12">
        	<div class="rt-heading">
            	<h1>Review Form </h1>
            </div>
        </div>
    </div>
</header>

<section>
    <div className="rt-container">
          <div className="col-rt-12">
              <div className="Scriptcontent">
              
       
<div className="feedback">
<form method="" action="">
<label>Please Provide your rating</label><br/>


<form class="star-rating">
  <input type="radio" name="rating1" value="1"/><i></i>
  <input type="radio" name="rating1" value="2"/><i></i>
  <input type="radio" name="rating1" value="3"/><i></i>
  <input type="radio" name="rating1" value="4"/><i></i>
  <input type="radio" name="rating1" value="5"/><i></i>
</form>

  <div class="clear"></div> 
  <hr class="survey-hr"/>

<br/>
<label for="m_3189847521540640526commentText">4. Any Other suggestions:</label>
<br/>
<textarea cols="100" name="commentText" rows="5" />

  <div class="clear"></div> 
  <button> Submit your review </button>
</form>
                
           
    		</div>
		</div>
    </div>
    </div>
    

</section>

</>
        );
    }
    
export default ReviewForm;
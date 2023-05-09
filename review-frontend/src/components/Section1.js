function Section1(props){
    return(
        <section id="ModuleTwo">
   
        <div id="leftContent">
        <img src={props.imageName} className="img-responsive" alt="movie"/>
        </div>
        <div id="rightContent"> 
            <div id="whiteblock">
            <h2>{props.MName}</h2>
            <h4>{props.Mdescription}</h4>
            <h3>{props.Mduration}</h3>
            <h5>{props.Mtype}</h5>
            <h5>Director: {props.Director}</h5>
            <h5>Writer: {props.writer}</h5>
            <h5>Stars: {props.stars}</h5>
            </div>
            
        </div>
    </section>
    
    );
}

export default Section1;
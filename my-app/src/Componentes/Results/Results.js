import React from "react";
import StarsRanking from "../StarsRanking/starsRanking";


const Results = ({dataResults, hideText}) => {
    const {poster_path, title , overview, vote_average, vote_count, release_date, backdrop_path} = dataResults;

    return (
        
        <div className="text-center letra"> 
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} className="img-fluid banner"></img>
                 {hideText ? 
                 <React.Fragment>
                    
                 <div className=" text-center m-3"><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="fotito"/></div>
                     <div className=""><h2>{title}</h2>
                     <div className=""><h5>{overview}</h5>
                       <span>
                       Estrellas:  <StarsRanking ranking={vote_average} /><br />
                       Año: {release_date}<br />
                       Votos: {vote_count}<br />
                       </span>  
                     </div>
                     </div>
                 </React.Fragment>
                        :   'ingrese su busqueda'}
                      
             </div>
             
     );   
};

export default Results;
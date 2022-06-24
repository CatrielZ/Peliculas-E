import React from "react";
import StarsRanking from "../StarsRanking/starsRanking";
import { Link } from "react-router-dom";

const Results = ({dataResults, hideText}) => {
    const {poster_path, title , overview, vote_average, vote_count, release_date} = dataResults;
    const image= `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        
        <div className="text-center"> 
            
                 {hideText ? 
                 <React.Fragment>
                    
                 <div className=" text-center m-3"><img src={image} alt={image}/></div>
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
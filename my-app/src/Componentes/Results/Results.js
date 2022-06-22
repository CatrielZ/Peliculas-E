import React from "react";
import StarsRanking from "../StarsRanking/starsRanking";

const Results = ({dataResults, hideText}) => {
    const {poster_path, title , overview, vote_average, vote_count, release_date} = dataResults;
    const image= `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div className="">
            { hideText ? 
            <React.Fragment>
                <div className=""><img src={image} alt={image}/></div>
                <div><h2>{title}</h2>
                    <div><h1>{overview}</h1>
                        <span>
                            Calificación: <StarsRanking ranking={vote_average}/><br/>
                            Año : {release_date}<br/>
                            Votos: {vote_count}<br/>
                        </span>
                    </div>
                 </div>
                 
                
            </React.Fragment>
            : 'Buscador'}
        </div>
    );    
};

export default Results;
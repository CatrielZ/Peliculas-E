import React from "react";
import { FontAwesomeIcon, fasolid } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css'



const StarsRanking = ({ ranking }) => {
    const star = Math.round(`${ranking}`/ 2)
    console.log(ranking)

    return(
        <React.Fragment>
            {[...Array(star)].map(
                (e, i) => <i class=""><FontAwesomeIcon icon={faStar}/></i>
            )}
        </React.Fragment>
    )
};

export default StarsRanking;
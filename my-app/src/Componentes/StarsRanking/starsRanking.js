import React from "react";
import { FontAwesomeIcon, fasolid } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css'



const StarsRanking = ({ ranking }) => {
    console.log(ranking)
    const star = Math.round(`${ranking}`)

    return(
        <React.Fragment>
            {[...Array(star)].map(
                (e, i) => <i class="fas fa-star">★</i>
            )}
        </React.Fragment>
    )
};

export default StarsRanking;
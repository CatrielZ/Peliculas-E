import React from "react";

const StarsRanking = ({ ranking }) => {
    console.log(ranking)
    const star = Math.round(`${ranking}`)

    return(
        <React.Fragment>
            {[...Array(star)].map(
                (e, i) => <i className="fas fa-start" key={i}></i>
            )}
        </React.Fragment>
    )
};

export default StarsRanking;
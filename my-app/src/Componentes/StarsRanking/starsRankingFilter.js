import './star.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const  StartRankingFilter = ({vote_average}) =>{
    
    return(
        <div className="row text-center starR">

            <div class="star-wrapper">
                <Link to={`/itemStar/8`}  className="s5" ><FontAwesomeIcon icon={faStar} /></Link>
                <Link to={`/itemStar/6`}  className="s4" ><FontAwesomeIcon icon={faStar} /></Link>
                <Link to={`/itemStar/4`}  className="s3" ><FontAwesomeIcon icon={faStar} /></Link>
                <Link to={`/itemStar/2`}  className="s2" ><FontAwesomeIcon icon={faStar} /></Link>
                <Link to={`/itemStar/0`}  className="s1" ><FontAwesomeIcon icon={faStar} /></Link>
            </div>
            <script src="https://kit.fontawesome.com/5ea815c1d0.js%22%3E"></script>
            <div class="wraper">
            <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="gitlabBilal" data-color="#FFDD00" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff"></script>
            </div>
        </div>
    )
}

export default StartRankingFilter;
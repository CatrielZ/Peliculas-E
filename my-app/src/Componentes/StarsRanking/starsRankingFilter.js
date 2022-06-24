import './star.css'

const  StartRankingFilter = ({vote_average}) =>{
    const urlFilter ="https://api.themoviedb.org/3/discover/movie/?api_key=2a277687df2908373b1b2bf828715e16";
    
    return(
        <div className="row text-center">
           <label><input className="star m-1" type="checkbox" title="bookmark page"/>
            < input className="star m-1" type="checkbox" title="bookmark page"/>
            < input className="star m-1" type="checkbox" title="bookmark page" />
            < input className="star m-1" type="checkbox" title="bookmark page" />
            < input className="star m-1" type="checkbox" title="bookmark page" />
            </label> 
        </div>
    )
}

export default StartRankingFilter;
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import StarsRanking from "../StarsRanking/starsRanking";

const ItemDetail = ({id,title, overview, vote_average, release_date, vote_count}) => {


    const [movies,  setMovies] = useState([])
    const {moviesID} = useParams() 
    console.log(moviesID + "CATRIEL")
    
    const urlDetail = `https://api.themoviedb.org/3/movie/${moviesID}?api_key=2a277687df2908373b1b2bf828715e16`;
    console.log(movies +" CATARIEL")

  
    const apiFetch = async () => {
    const response = await fetch (urlDetail)
    const responseJSON = await response.json()
    setMovies(responseJSON)
    }

  useEffect(() => {
    apiFetch()   
  }, [])



const image = `https://image.tmdb.org/t/p/w500${movies.poster_path}`


  if(movies.length === 0){
      return <h1>No hay detalles</h1>
    }

  return(
    <>
    <div className="conteiner m-5">
    <div className=" text-center m-3"><img src={image} alt={image}/></div>
                     <div className=""><h2>{movies.title}</h2>
                     <div className=""><h5>{movies.overview}</h5>
                       <span>
                       Estrellas:  <StarsRanking ranking={movies.vote_average} /><br />
                       Año: {movies.release_date}<br />
                       Votos: {movies.vote_count}<br />
                       </span>  
                     </div>
                     </div>
  </div>
  
   
    
                     </>
    
  )
}
export default ItemDetail;


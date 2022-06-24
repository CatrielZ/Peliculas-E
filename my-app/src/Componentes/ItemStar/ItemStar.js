import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";



const ItemStar = () =>{
   const {star} = useParams()
   
    const urlFilter =`https://api.themoviedb.org/3/discover/movie?api_key=2a277687df2908373b1b2bf828715e16&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&vote_average.gte=${star}&vote_average.lte=${(star+2)}&with_watch_monetization_types=flatrate`;
    
    
    const [movies,  setMovies] = useState([])
   
    
    const apiFetch = async () => {
    const response = await fetch (urlFilter)
    const responseJSON = await response.json()
    setMovies(responseJSON['results'])
    }
    
  
    useEffect(() => {
      apiFetch()   
    }, [])
    if(movies.length === 0){
        return <h1>No existen Peliculas</h1>
      }

    return(
        <React.Fragment key={movies.id}> 
            <div className="row row-cols-3">
            <img src="https://www.gratistodo.com/wp-content/uploads/2016/08/01-Regreso-al-Futuro-Wallpapers.jpg" className="img-fluid banner"></img>
            {
                Object.keys(movies).map(index => {
                return ( 
            
                
                    <div className="cart p-2" >
                    
                    <div className="col">
                        <div className="card colorCard">
                            <img src={`https://image.tmdb.org/t/p/original${movies[index].poster_path}`} className="" alt={movies[index].title} />
                            <div className="card-body">
                            <h5 className="card-title colorTitulo">{movies[index].title}</h5>
                            </div>
                            <Link to={`/itemDetail/${movies[index].id}`} className="btn btn-dark">Ver detalles</Link>
                        </div>
                    </div> 
                    </div>   
                )
                }) 
            }
        </div>

      
      </React.Fragment>  
    )

    
    
       

    
       
    
}

export default ItemStar;
import { useEffect, useState } from "react";
import './itemListConteiner.css'
import {Link} from 'react-router-dom'



const ItemListConteiner =() => {
  const [movies,  setMovies] = useState([])
  const url = "https://api.themoviedb.org/3/discover/movie/?api_key=2a277687df2908373b1b2bf828715e16"
  
  const apiFetch = async () => {
  const response = await fetch (url)
  console.log(response.status)
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
    <>
    <div className="row row-cols-3">
      {
        Object.keys(movies).map(index => {
          console.log(movies[index]);
          return ( 
    
           
            <div className="cart p-2" >
               
               <div className="col">
                 <div className="card colorCard">
                    <img src={`https://image.tmdb.org/t/p/original${movies[index].poster_path}`} className="" alt={movies[index].title} />
                    <div className="card-body">
                      <h5 className="card-title colorTitulo">{movies[index].title}</h5>
                    </div>
                    <p>clasificion {movies[index].vote_average}</p>
                    <p>popularidad {movies[index].popularity}</p>
                    <Link to={`/itemDetail/${movies[index].id}`} className="btn btn-dark">Ver detalle</Link>
                 </div>
               </div> 
            </div>   
          )
        }) 
      }
      </div>
        
    </>
  )
}

export default ItemListConteiner
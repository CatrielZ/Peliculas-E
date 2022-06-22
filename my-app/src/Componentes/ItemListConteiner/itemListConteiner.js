import { useEffect, useState } from "react";

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
      return <h1>NO hay Peliculas</h1>
    }

  return(
    <>
      {
        Object.keys(movies).map(index => {
          console.log(movies[index]);
          return ( 
           <div>
           
           <div className="row text-center">
               
               <div className="col-3 text-center">
                 <div className="card colorCard">
                   <img src={`https://image.tmdb.org/t/p/original${movies[index].poster_path}`} className="card-img-top" alt={movies[index].title} />
                   <div className="card-body">
                     <h5 className="card-title colorTitulo">{movies[index].title}</h5>
                   </div>
                   <p>clasificion {movies[index].vote_average}</p>
                   <p>popularidad {movies[index].popularity}</p>
                 </div>
               </div> 
              
               </div></div> 
            
          )
        }) 
      }
        
    </>
  )
}

export default ItemListConteiner
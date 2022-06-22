import { useEffect, useState } from "react"
const Popularidad = () => {
        const url = "https://api.themoviedb.org/3/discover/movie/?api_key=2a277687df2908373b1b2bf828715e16"
        const [movies,  setMovies] = useState([])
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
                return <h1>NO hay Peliculas POpulares</h1>
            }
    return(
        <div className=" conteiner-fluid m-3">
             
                <div className="row center">
                    <div className="col-4">
                        {
                            
                        }
                         <p>imagen grande</p>                
                    </div>
                    <div className="col-8">
                        {
                            Object.keys(movies).map(index => {
                                console.log(movies[index]);
                                return (<p>imagensitas</p>)
                            })
                        }
                        
                    </div>
                </div>
            
        </div>
    )
}

export default Popularidad;
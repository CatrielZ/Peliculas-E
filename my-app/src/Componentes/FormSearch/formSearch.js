import React, {Component} from "react";
import { Link } from "react-router-dom";
import StarsRanking from "../StarsRanking/starsRanking";
import './form.css'
import StartRankingFilter from "../StarsRanking/starsRankingFilter";



class FormSearch extends Component{
    state = {
        search: '',
        error: false
    }

    handleChange = e => {
        this.setState({
            search : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const valueState = this.state.search;

        if (valueState === '') {
            this.setState({
                error : true
            });

            return;   
        }
        

        const url = `https://api.themoviedb.org/3/search/movie?api_key=2a277687df2908373b1b2bf828715e16&language=es&query=${valueState}`;
        const miInit = { method: 'GET'};

        fetch(url, miInit)
        .then(response => response.json())
        .then(data => {
            let filterArray =data.results[0]

            if (filterArray === undefined){
                this.setState({
                    error: true
                });
                return
            
            } else {
                this.props.getDatosResults(filterArray)
                this.setState({
                    error : false
                })
            }
        });
    
    
    }

    render() {
        const {error} = this.state;
        return(
         
            <div className=" conteiner-fluid m-3 text-center letra">
                
            { error ? <div className="">La pelicula no se encontro</div>  
            : null  }
                <form className="" onSubmit={this.handleSubmit}>
                <img src="https://www.gratistodo.com/wp-content/uploads/2016/08/01-Regreso-al-Futuro-Wallpapers.jpg" className="img-fluid banner"></img> 
                <h1 className="fw-bold">Tus peliculas favoritas!</h1>
                 <h3>Todas aquí</h3>   
                <input type="text" className="form-control me-sm-2 mb-2" autoComplete="off" name='search' placeholder="Escribe la pelicula" onChange={this.handleChange} value={this.state.search}/>
                    <button type="submit" className="btn btn-secondary my-2 my-sm-0 ">Buscar</button>   
                </form>
                
                
                
            </div>      
    )
    }


}

export default FormSearch;
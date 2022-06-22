import React, {Component} from "react";

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
            <div>
                {error ? <div className="">La pelicula no se encontro</div>
                :null }
                    <form className="" onSubmit={this.handleSubmit}>
                        <input type="text" className="" name='search' placeholder="Escriba la pelicula" onChange={this.handleChange} value={this.state.search}/>
                        <button type="submit" className=""> Buscar</button>
                    </form>
            </div>
        )
    }


}

export default FormSearch;
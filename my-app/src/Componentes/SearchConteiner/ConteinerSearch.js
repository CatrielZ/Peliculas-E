import React,{ Component } from "react";
import FormSearch from "../FormSearch/formSearch";
import Results from "../Results/Results";
import ItemListConteiner from "../ItemListConteiner/itemListConteiner";

class ContainerSearch extends Component{
    state = {
        dataResults:[],
        hidenText: false,
    }

    getDatosResults = datos => {
        const dataResults = datos
            this.setState({dataResults, hideText: true})
    }
    
    render(){
        return(
            <>
            <section>
                <FormSearch getDatosResults={this.getDatosResults}/>
                <Results dataResults={this.state.dataResults} hideText={this.state.hideText}/>
                
            </section>
            <section>
                <ItemListConteiner/>
            </section>
            </>
        );
    }


}

export default ContainerSearch;
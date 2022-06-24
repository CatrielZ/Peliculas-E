import React,{ Component } from "react";
import FormSearch from "../FormSearch/formSearch";
import Results from "../Results/Results";
import ItemListConteiner from "../ItemListConteiner/itemListConteiner";
import ItemStar from "../ItemStar/ItemStar";


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
            <section >
                
               <div className=" h-200 w-200  p-5 text-center">
                 
                <FormSearch getDatosResults={this.getDatosResults}/>
                </div>
                
                <Results dataResults={this.state.dataResults} hideText={this.state.hideText}/>
                
            </section>
            </>
        );
    }


}

export default ContainerSearch;
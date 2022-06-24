import NavBar from './Componentes/NavBar/NavBar';
import ItemListConteiner from './Componentes/ItemListConteiner/itemListConteiner';
import React  from 'react';
import ContainerSearch from './Componentes/SearchConteiner/ConteinerSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './Componentes/ItemDetail/ItemDetail';
import Results from './Componentes/Results/Results';
import ItemStar from './Componentes/ItemStar/ItemStar';
import StartRankingFilter from './Componentes/StarsRanking/starsRankingFilter';



function App() {
   



  return (
    <>
    
      <BrowserRouter>
      <NavBar/>
      <div className='m-5 p-5'>
      <StartRankingFilter/> 
      </div>
      

      <div className='text-center m-5'>
        <Routes>
          <Route path='/' element={<ItemListConteiner/>}></Route>
          <Route path='/ItemDetail/:moviesID' element={<ItemDetail/>}></Route>
          <Route path='/ItemStar' element = {<ItemStar/>}></Route>
          <Route path='/ItemStar/:star' element={<ItemStar/>}></Route>
        </Routes>
      </div>
       
      </BrowserRouter>  
      
      
      
     
      <script src="js/addons/rating.js"></script>
    </>
  );
}

export default App;

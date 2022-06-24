import NavBar from './Componentes/NavBar/NavBar';
import ItemListConteiner from './Componentes/ItemListConteiner/itemListConteiner';
import React  from 'react';
import ContainerSearch from './Componentes/SearchConteiner/ConteinerSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from './Componentes/ItemDetail/ItemDetail';


function App() {
   



  return (
    <>
    
      <BrowserRouter>
      <NavBar/>
      <div className='text-center m-5'>
        <Routes>
          <Route path='/' element={<ContainerSearch/>}></Route>
          <Route path='/list' element={<ItemListConteiner/>}></Route>
          <Route path='/ItemDetail/:moviesID' element={<ItemDetail/>}></Route>
        </Routes>
      </div>
       
      </BrowserRouter>  
      
      
      
     
    
    </>
  );
}

export default App;

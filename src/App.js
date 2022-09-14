import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/cards/cards";
import Filters from "./components/filters/filters";

function App() {

  let [pageNumber, setPageNumber] = useState(2);
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData;


  console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(()=>{

    (async function(){

      let data = await fetch(api).then(res=>res.json());
      updateFetchedData(data);

    })();
    
  }, [api]);


  return ( 
    
    <div className="App">

      <h1 className="text-center fantasy my-4">
        Rick & Morty <span className="text-primary">WiKi</span> 
      </h1>
      
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards/>
              <Cards/>
              <Cards/>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default App;

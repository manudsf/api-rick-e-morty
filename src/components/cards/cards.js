import React from 'react';

const Cards = ({results}) => {

  let display; 
  console.log(results);

  if(results){
    display = results.map((x) => {

      let {id, name, image, location} = x
      
      return <div key={id} className="col-4">
        <div className=''>
          <img src={image} alt= " " className= "img-fluid"/>
          <div className='content'>
            <div className='fs-4 fw-bold mb-4'>{name}</div>
            <div className=''>
              <div className='fs-6'>última localização</div>
              <div className='fs-5'>{location.name}</div>
            </div>
          </div>
        </div>
      </div>
    });

  } else {
    display = "Não encontrei nenhum personagem com esse nome :(";
  }

  return <>{display}</>;
};

export default Cards;
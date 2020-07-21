import React from 'react';
import Gif from './Gif';
import './gifgrid.css';
import { useFecthGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {
  
  const { data:images , loading} = useFecthGifs(category);

  return ( 
    <>
      <h4 className="text-center animate__animated animate__fadeIn">{category}</h4>
      <hr className="w-50"/>
      { loading && <p className="animate__animated animate__flash">Cargando Gifs</p>}
      <div className="card-grid">
          {images.map(cat => (
            <Gif 
              key={cat.id}
              img={cat}
            />
          ))}
      </div> 
    </>
   );
}
 
export default GifGrid;
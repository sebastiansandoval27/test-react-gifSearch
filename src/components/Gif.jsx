import React from 'react';
import './gif.css';

const Gif = ({img}) => {

  const {title, url} = img;

  return ( 
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title}/>
      <p>{title}</p>
    </div>
   );
}
 
export default Gif;
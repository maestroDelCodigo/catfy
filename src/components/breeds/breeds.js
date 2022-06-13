import React from 'react'
import '../../styles/button.scss'
import {useEffect, useState} from 'react'
import getBreeds from '../../services/getBreeds';

function Breeds({ name }) {
    const [breeds, setBreeds] = useState([]);

    useEffect(function(){
      getBreeds().then(breeds => setBreeds(breeds))
    },[])
  
    return (
        <div className='buttonContainer'>
      {
        breeds.map(br =>
          <div className='buttonLinkCategories'><a href="/breeds/:keyword">{br.name}</a>
          </div>)
      }
    </div>
    );
}

export default Breeds
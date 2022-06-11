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
        <div>
      {
        breeds.map(br =>
          <button>{br.name}</button>)
      }
    </div>
    );
}

export default Breeds
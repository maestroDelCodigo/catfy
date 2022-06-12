import React, { useState, useEffect } from 'react'
import getCategories from '../../services/getCategories.js';
import '../../styles/button.scss';    
function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    getCategories().then(categories => setCategories(categories))
  }, [])

  return (
   <><div className='buttonContainer'>
      {categories.map(cat => <div className='buttonLinkCategories'>
        <a href="/categories/:keyword">{cat.name}</a>
      </div>)}
    </div></>
  )
}

export default Categories
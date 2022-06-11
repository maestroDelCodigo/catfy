import React, { useState, useEffect } from 'react'
import getCategories from '../../services/getCategories.js';
import '../../styles/button.scss';
import { Route } from "wouter";       
        

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    getCategories().then(categories => setCategories(categories))
  }, [])

  return (
   <div>
      {categories.map(cat => <button>{cat.name}</button>)}
    </div>
  )
}

export default Categories
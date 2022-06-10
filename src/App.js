import './App.css';
import React, {useState, useEffect} from 'react';
import getCategories from './services/api';
import Categories from './components/categories/Categories.js';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(function(){
    getCategories().then(categories => setCategories(categories))
  },[])

  return (
    <div className="App">
      <section className='App-content'>
        {categories.map(singleCategories =><Categories 
        key={singleCategories.id}
        name={singleCategories.name}></Categories>)}
      </section>
    </div>
  );
}

export default App;

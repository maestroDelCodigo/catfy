import './App.css';
import React,{useState} from 'react';
import Categories from './components/categories/Categories.js';
import Breeds from './components/breeds/breeds';

function App() {
  const [categories, setCategories] = useState([]);
  const [breeds, setBreeds] = useState([]);
  return (
    <div className="App">
      <section className='App-content'>
        <Categories
        categories={categories}
        setCategories={setCategories}>
        </Categories>
      </section>
   
    
    <section className='App-content'>
      <Breeds
      breeds={breeds}
      setBreeds={setBreeds}>
      </Breeds>
    </section>
    </div>
  );
}

export default App;

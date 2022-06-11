import './App.scss';
import React,{useState} from 'react';
import Categories from './components/categories/Categories.js';
import Breeds from './components/breeds/breeds';
import MenuOption from './components/menuOption/menuOption.js';

function App() {
  const [categories, setCategories] = useState([]);
  const [breeds, setBreeds] = useState([]);
  return (
    <><div className="App">
      {/* <section className='App-content'>
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
      </section> */}
      <div className='title'>
      <span>CATFY</span>
      </div>
      
      <div className='catImage'>
      <img src={"https://static.vecteezy.com/system/resources/previews/001/199/162/non_2x/silhouettes-cat-png.png"}></img>
      </div>
      
    </div><section>
        <MenuOption></MenuOption>
      </section></>
    
  );
}

export default App;

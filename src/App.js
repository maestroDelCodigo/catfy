import './App.scss';
import Categories from './components/categories/Categories.js';
import Breeds from './components/breeds/breeds';
import PhotoByCategory from './components/photoByCategorie/photoByCategorie';
import './styles/button.scss'
import { Route } from "wouter";
function App() {
  return (
    <><><><div className="App">
      <div className='title'>
        <a href='/'>
          <span>CATFY</span>
        </a>
      </div>
      <div className='catImage'>
        <img alt='gato' src={"https://static.vecteezy.com/system/resources/previews/001/199/162/non_2x/silhouettes-cat-png.png"}></img>
      </div>
    </div>
        <div className='buttonLink'>
          <a href="/breeds">Breeds</a>
          <a href="/categories">Categories</a>
        </div>
    </></>
      <Route path='/categories' component={Categories}></Route>
      <Route path='/breeds' component={Breeds}></Route>
      <Route path='/categories/1' component={PhotoByCategory}></Route>
      </>
  );
}

export default App;

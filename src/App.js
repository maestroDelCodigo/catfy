import './App.scss';
import Categories from './components/categories/Categories.js';
import Breeds from './components/breeds/breeds';
import './styles/button.scss'
import { Route, Switch } from "wouter";
function App() {
  return (
    <><><div className="App">
      <div className='title'>
        <span>CATFY</span>
      </div>
      <div className='catImage'>
        <a href='/'>
        <img alt='gato' src={"https://static.vecteezy.com/system/resources/previews/001/199/162/non_2x/silhouettes-cat-png.png"}></img>
        </a>
      </div>

      <Switch>
        <Route path='/categories' component={Categories}></Route>
        <Route path='/breeds' component={Breeds}></Route>
        <Route path='/' component={App}></Route>
      </Switch>

      <div className='buttonLink'>
        <a href="/categories">Categories</a>
      </div>
    </div><div>
        <div className='buttonLink'>
          <a href="/breeds">Breeds</a>
        </div>
      </div></></>
  );
}

export default App;

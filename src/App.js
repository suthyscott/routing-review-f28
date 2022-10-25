import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Auth from './components/Auth'
import Recipe from './components/Recipe';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/recipe/:id' element={<Recipe/>}/>
      </Routes>
    </div>
  );
}

export default App;

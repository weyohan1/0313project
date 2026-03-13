import './App.css';
import {Route,Routes,Link} from 'react-router-dom';

import Home from './Component/Home';
import Login from './Login';
import Cart from './Cart';
import MechanicalKeyboard from './Component/MechanicalKeyboard';
import MembraneKeyboard from './Component/MembraneKeyboard';
// import styled from 'styled-components';



function App() {
  return (
  <div className="App">

<header className='header'>

<nav className='gnb_box'>
<ul className='gnb'>
<li><Link to='/'>Home</Link></li>
<li><Link to='/mechanical'>MechanicalKeyboard</Link></li>
<li><Link to='/membrane'>MembraneKeyboard</Link></li>
</ul>

<ul className='gnb01'>
<li><Link to='/login'>login</Link></li>
<li><Link to='/cart'>cart</Link></li>
</ul>

</nav>
</header>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/mechanical' element={<MechanicalKeyboard/>}/>
  <Route path='/membrane' element={<MembraneKeyboard/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/cart' element={<Cart/>}/>
   
</Routes>

    </div>
   
  );
}

export default App;

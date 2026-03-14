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
<li><Link to='/'>홈</Link></li>
<li><Link to='/mechanical'>기계식 키보드</Link></li>
<li><Link to='/membrane'>멤브레인 키보드</Link></li>
</ul>

<ul className='gnb01'>
<li><Link to='/login'>로그인</Link></li>
<li><Link to='/cart'>장바구니</Link></li>
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

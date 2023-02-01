

import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Cart from './Cart';
import Home from './Home';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/cart'  element={<Cart />} />
      <Route path='*'  element={<Home />} />
      
     </Routes>
      
    </div>
  );
}

export default App;

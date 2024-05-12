import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js';
import Signup from './Pages/Signup/Signup.js';
import Login from './Pages/Login/Login.js';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/index.html' element={<Home />} />
          <Route path='/signup.html' element={<Signup />} />
          <Route path='/login.html' element={<Login />} />
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;

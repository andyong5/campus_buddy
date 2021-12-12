import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home'
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import './App.css';

function App() {
//  const [users, setUsers] = useState([])
  //useEffect(() => {
    //// GET request using fetch inside useEffect React hook
    //fetch('/users')
        //.then(response => response.json())
        //.then(data => {
          //console.log(data)
          //setUsers(data)
        //});

//// empty dependency array means this effect will only run once (like componentDidMount in classes)
//}, []);
  return (
    <Router>
      <div className="App">
        {<Navbar />}
        <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/> 
          <Route exact path="/about" element={<About />}/> 
          <Route exact path="/login" element={<LoginHooks />}/> 
        </Routes>
        <br />
        </div>
      </div>
    </Router>
  );
}

export default App;

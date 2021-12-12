import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import FrontPage from "./FrontPage";
import Nav from "./Nav";
import Home from "./Home";
import "./App.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  const logout = () => {
    console.log("logout"); // eslint-disable-line
  };
  const error = (response) => {
    console.error(response); // eslint-disable-line
    setProfile(response.profileObj);
  };
  const success = (response) => {
    console.log(response); // eslint-disable-line
  };
  const clientId =
    "615520021367-sjvmtmuujlf91gicag6u1kr4b4mu76bq.apps.googleusercontent.com";

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Nav
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            profile={profile}
          />
        ) : (
          <GoogleLogin
            onSuccess={(res) => {
              success(res);
              setIsLoggedIn(true);
            }}
            onFailure={error}
            clientId={clientId}
            isSignedIn={true}
          >
            Login
          </GoogleLogin>
        )}
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          <br />
        </div>
      </div>
    </Router>
  );
}

export default App;

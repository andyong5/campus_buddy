import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Account from "./Account";
import Classes from "./Classes/Classes";
import Class from "./Classes/Class"
import Nav from "./Nav";
import Home from "./Home";
import "./App.css";
import { GoogleLogin } from "react-google-login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tokenObj, setTokenObj] = useState({});
  const error = (response) => {
    console.error(response.profileObj); // eslint-disable-line
  };

  useEffect(() => {
    if (tokenObj) {
      setIsLoggedIn(true);
    }
  });

  const success = (response) => {
    console.log(response); // eslint-disable-line
    setTokenObj(response.profileObj);
  };
  const clientId =
    "615520021367-sjvmtmuujlf91gicag6u1kr4b4mu76bq.apps.googleusercontent.com";

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Nav setIsLoggedIn={setIsLoggedIn} tokenObj={tokenObj} />
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
            <Route exact path="/classes" element={<Classes />} />
            <Route exact path="/class" element={<Class />} />
            <Route
              exact
              path="/account"
              element={<Account tokenObj={tokenObj} />}
            />
          </Routes>
          <br />
        </div>
      </div>
    </Router>
  );
}

export default App;

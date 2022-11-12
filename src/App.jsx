import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import WelcomePage from "./components/WelcomePage.jsx";
import About from "./components/About.jsx";
import LogIn from "./components/LogIn.jsx";
import GetJoke from "./components/GetJoke.jsx";
import {Alert} from "react-bootstrap";
import facade from "./apiFacade.js";
import Profile from "./components/Profile.jsx";

function App() {
    //usestates her
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('It just works! ~Todd Howard');


    return (
        <BrowserRouter>

            <Header loggedIn={loggedIn}/>

            <Routes>

                <Route path="/" element={<WelcomePage/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage}/>}>
                    <Route index element={<Profile/>}/>
                </Route>
                <Route path="joke" element={facade.hasUserAccess('user', loggedIn) ? <GetJoke setErrorMessage={setErrorMessage} /> : <h4>Get back to work you lazy dog!</h4>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            <Alert className="mt-4" >Status: {errorMessage}</Alert>
        </BrowserRouter>
    );
}

export default App;
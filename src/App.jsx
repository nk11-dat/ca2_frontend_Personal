import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.jsx";
import WelcomePage from "./components/WelcomePage.jsx";
import About from "./components/About.jsx";
import LogIn from "./components/LogIn.jsx";
import GetJoke from "./components/GetJoke.jsx";
import {Alert} from "react-bootstrap";
import facade from "./apiFacade.js";
import Search from "./components/Search.jsx";

function App() {
    //usestates her
    const [loggedIn, setLoggedIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('It just works! ~Todd Howard');
    const [searchInput, setSearchInput] = useState("")

    const searchClick = (e) => {
        facade.fetchData("dog/breeds/" + searchInput, data =>
            setDataFromServer(data), "");
    }

    const changeHandler = (e) => {
        setSearchInput(e.target.value);
        console.log(e.target.value);
    }

    return (
        <BrowserRouter>

            <Header loggedIn={loggedIn}/>

            <Routes>

                <Route path="/" element={<WelcomePage/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="login" element={<LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage}/>}></Route>
                <Route path="joke" element={facade.hasUserAccess('user', loggedIn) ? <GetJoke setErrorMessage={setErrorMessage} /> : <h4>Get back to work you lazy dog!</h4>}/>
                <Route path="dog" element={<Search changeHandler={changeHandler} searchInput={searchInput} searchClick={searchClick} petType={"dog"}/>}/>
                <Route path="cat" element={<Search changeHandler={changeHandler} searchInput={searchInput} searchClick={searchClick} petType={"dog"}/>}/>
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
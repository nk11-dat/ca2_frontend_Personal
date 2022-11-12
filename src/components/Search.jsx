import React, {useState} from 'react';
import PropTypes from "prop-types";
import facade from "../apiFacade.js";
import {Outlet} from "react-router-dom";

function Search({changeHandler, searchClick, dataFromServer, petType}) {

    return (
        <div>
            <h2>Search for {petType}</h2> {/*Add a bootscrap class below...*/}
            <input id={"searchField"} type="search" placeholder={"Name of "+petType+" species"} onChange={changeHandler}/>
            <button onClick={searchClick}>SEARCH</button>
            <Outlet context={{dataFromServer}}/>
        </div>
    );
}

export default Search;

Search.prototype = {
    id: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired
}
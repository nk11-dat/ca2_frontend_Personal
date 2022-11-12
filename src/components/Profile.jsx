import React from 'react';
import apiFacade from "../apiFacade.js";

function Profile(props) {
    const username = apiFacade.getUserName();
    return (
        <div>
            {username ? username + "'s profile page!" : ""}
        </div>
    );
}

export default Profile;
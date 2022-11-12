import React, {useEffect, useState} from "react";
import facade from "../apiFacade.js";
import DogTable from "./DogTable.jsx";

function UserPage({username}) {
    const [dogDataFromServer, setDogDataFromServer] = useState({})
    let rows;

    useEffect(() => {
        facade.fetchData("dog/" + username, data =>
            setDogDataFromServer(data), "");

        if (dogDataFromServer.length > 0)
            rows = dogDataFromServer.map(dog => {
                `<tr>
                    <td>${dog.id}</td>
                    <td>${dog.name}</td>
                    <td>${dog.life_span}</td>
                    <td>${dog.weight.imperial}</td>
                    <td>${dog.weight.metric}</td>
                </tr>`
            }).join("");//setDataFromServer(data), "");
    }, [])

    return (
        <div>
            <DogTable dataFromServer={dogDataFromServer}/>
            <h2>Your favorite cats</h2>
            {"cats go here..."}
        </div>
    )

}

export default UserPage;
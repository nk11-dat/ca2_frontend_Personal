import React, {useEffect, useState} from "react";
import facade from "../apiFacade.js";
import PetTable from "./PetTable.jsx";

function UserPage({username}) {
    const [dogDataFromServer, setDogDataFromServer] = useState({})
    const [catDataFromServer, setCatDataFromServer] = useState({})

    useEffect(() => {
        facade.fetchData("dog/" + username, data => setDogDataFromServer(data), "")
        // facade.fetchData("cat/" + username, data => setCatDataFromServer(data), "")
    }, [])

    return (
        <div>
            <PetTable dataFromServer={dogDataFromServer} petType={"dog"}/>
            <PetTable dataFromServer={catDataFromServer} petType={"cat"}/>
        </div>
    )

}

export default UserPage;
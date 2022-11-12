import React, {useEffect, useState} from "react";
import facade from "../apiFacade.js";

function UserPage({username}) {
    const [dataFromServer, setDataFromServer] = useState({})
    let rows;

    useEffect(() => {
        facade.fetchData("dog/" + username, data =>
            setDataFromServer(data), "");

        if (dataFromServer.length > 0)
            rows = dataFromServer.map(dog => {
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
            <h2>Data Received from server</h2>
            <h3>{dataFromServer.length > 0 ? (
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Life span</th>
                            <th>Pounds</th>
                            <th>Kgs</th>
                        </tr>
                        </thead>
                        <tbody>
                        {dataFromServer.map(dog => (
                            <tr>
                                <td>{dog.id}</td>
                                <td>{dog.name}</td>
                                <td>{dog.life_span}</td>
                                <td>{dog.weight.imperial}</td>
                                <td>{dog.weight.metric}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>)
                :
                "Loading..."}</h3>
        </div>
    )

}

export default UserPage;
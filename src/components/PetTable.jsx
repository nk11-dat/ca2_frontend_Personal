import React from 'react';
import facade from "../apiFacade.js";

function PetTable({dataFromServer, petType, addPet}) {
    const addClick = (e) => {
        facade.fetchData("dog/addDogToUser/" + username, data =>
            setDataFromServer(data), "");
    }

    const username= facade.getUserName();

    return (
        <>
            <h2>{petType}'s</h2>
            {dataFromServer.length > 0 ? (
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>{petType === "dog" ? "Life span" : "Indoor"}</th>
                            <th>Pounds</th>
                            <th>Kgs</th>
                            {addPet ? <th></th> : ""}
                        </tr>
                        </thead>
                        <tbody>
                        {dataFromServer.map(pet => (
                            <tr key={pet.id}>
                                <td>{pet.id}</td>
                                <td>{pet.name}</td>
                                <td>{petType === "dog" ? pet.life_span : (pet.indoor === 0 ? "No" : "Yes")}</td>
                                <td>{pet.weight.imperial}</td>
                                <td>{pet.weight.metric}</td>
                                {addPet ? <td>
                                    <button className={"btn btn-outline-light"}>Add</button>
                                </td> : ""}
                            </tr>
                        ))}
                        </tbody>
                    </table>)
                :
                "Loading..."}
        </>
    );
}

export default PetTable;
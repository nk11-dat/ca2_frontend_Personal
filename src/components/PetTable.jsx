import React from 'react';
import facade from "../apiFacade.js";

function PetTable({dataFromServer, petType, username}) {
    //TODO: Se om du kan bruge username til det samme som "addPet", bare hvor der testes om det er null eller ej
    const addClick = (e) => {
        console.log(e.target.value)
        const dogId = e.target.value;
        const jsonElement = dataFromServer.filter((dog) => {
            // console.log(dog);
            return dog.id == dogId
        })[0];
        console.log(jsonElement);
        facade.postData("dog/addDogToUser/" + username,
            () => {}, "", jsonElement);
        e.target.disabled = true;
    }

    return (
        <>
            <h2 className={"text-center"}>{petType}'s</h2>
            {dataFromServer.length > 0 ? (
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>{petType === "dog" ? "Life span" : "Indoor"}</th>
                            <th>Pounds</th>
                            <th>Kgs</th>
                            {username ? <th></th> : ""}
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
                                {username ? <td>
                                    <button value={pet.id} className={"btn btn-outline-light"} onClick={addClick}>Add</button>
                                </td> : ""}
                            </tr>
                        ))}
                        </tbody>
                    </table>)
                :
                (<p className={"text-center"}>Loading...</p>)}
        </>
    );
}

export default PetTable;
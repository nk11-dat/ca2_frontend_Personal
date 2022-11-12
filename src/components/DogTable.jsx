import React from 'react';

function DogTable({dataFromServer, petType}) {
    let topPart;
    if (petType === "dog")
    {
        topPart = "";
    }

    return (
        <>
            <h2>Your favorite dog</h2>
            {dataFromServer.length > 0 ? (
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
                "Loading..."}
        </>
    );
}

export default DogTable;
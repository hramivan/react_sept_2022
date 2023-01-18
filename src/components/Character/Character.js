import React from 'react';

const Character = ({character}) => {
    const {id,name,status,species,gender,image}=character;
    return (
        <div>
<h2>id-{id} name:{name} </h2>

            <div>status--{status}</div>
            <div>species--{species}</div>
            <div>gender--{gender}</div>
            <img src={image}alt='Not Found'/>
        </div>
    );
};

export {Character};
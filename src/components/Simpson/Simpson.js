import React from 'react';

const Simpson = ({simpson}) => {
    const {name, image} = simpson
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt='Not Found'/>
        </div>
    );
};

export {Simpson};
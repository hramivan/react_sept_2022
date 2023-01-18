import React from 'react';
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            image: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {
            id: 2,
            name: 'Marge',
            image: 'https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png'
        },
        {
            id: 3,
            name: 'Bart',
            image: 'https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif'
        },
        {
            id: 4,
            name: 'Lisa',
            image: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        }
    ]
    return (
        <div>
            {
                simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)
            }
        </div>
    );
};

export {Simpsons} ;
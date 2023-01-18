import React from 'react';
import {Simpsons} from "./components/Simpsons/Simpsons";

import {RickAndMorty} from "./components/Rick_and_Morty/Rick_and_Morty";
const App = () => {
    return (
        <div>

            <Simpsons/>
            <RickAndMorty/>

        </div>
    );
};

export {App} ;
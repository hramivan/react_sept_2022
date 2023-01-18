import React from 'react';
import {Character} from "../Character/Character";

const RickAndMorty = () => {
    const characters =[
        {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"

        },
        {
            id: 16,
            name: "Amish Cyborg",
            status: "Dead",
            species: "Alien",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg"
        },
        {
            id: 20,
            name: "Ants in my Eyes Johnson",
            status: "unknown",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
        },
        {
            id: 8,
            name: "Adjudicator Rick",
            status: "Dead",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
        },
        {
            id: 5,
            name: "Jerry Smith",
            status: "Alive",
            species: "Human",
            gender: "Male",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        }
    ]
    return (
        <div>
            {
                characters.map(character=><Character key={character.id} character={character}/>)
            }
        </div>
    );
};

export  {RickAndMorty};
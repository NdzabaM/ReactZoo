import React from 'react';


const Animals = (props) => {
const {animalName, animalAge, animalType} = props;
return (
        <div>
            <header>
                <p>This is {animalName}, who is {animalAge} years of age. {animalName} is a(n) {animalType}.</p>
            </header>
        </div>
)};








export default Animals;
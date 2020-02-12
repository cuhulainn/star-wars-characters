import React from 'react';

const Person = props => {
    return (
        <React.Fragment>
            <h4>{props.name}</h4>
            <ul>
                <li>Height: {props.height}</li>
                <li>Mass: {props.mass}</li>
                <li>Gender: {props.gender}</li>
                <li>Birth Year{props.birthYear}</li>
            </ul>
        </React.Fragment>
    );
};

export default Person;
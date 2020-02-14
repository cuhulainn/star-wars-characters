import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const Person = props => {
    const getPersonData = props.onClick;
    
    return (
        <TableRow hover>
            <TableCell component="th" scope="row">
                {/* Trying to pass the value of the person id to the onClick function being passed in */}
                {/* which is the getPersonData function in App.js */}
                <Button value={props.url} onClick={(e) => {getPersonData(e.target.value)}}>{props.name}</Button>
            </TableCell>
            <TableCell>{props.height}</TableCell>
            <TableCell>{props.mass}</TableCell>
            <TableCell>{props.birth_year}</TableCell>
        </TableRow>
    );
};

export default Person;
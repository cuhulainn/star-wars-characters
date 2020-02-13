import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Person = props => {
    return (
        <TableRow hover>
            <TableCell component="th" scope="row">{props.name}</TableCell>
            <TableCell>{props.height}</TableCell>
            <TableCell>{props.mass}</TableCell>
            <TableCell>{props.birth_year}</TableCell>
        </TableRow>
    );
};

export default Person;
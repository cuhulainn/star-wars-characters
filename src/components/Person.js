import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const Person = props => {
    return (
        <TableRow hover>
            <TableCell component="th" scope="row"><a href={props.url}>{props.name}</a></TableCell>
            <TableCell>{props.height}</TableCell>
            <TableCell>{props.mass}</TableCell>
            <TableCell>{props.birth_year}</TableCell>
        </TableRow>
    );
};

export default Person;
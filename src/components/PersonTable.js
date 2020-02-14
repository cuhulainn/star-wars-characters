import React from 'react';
import Person from './Person';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const PersonTable = props => {
    return(
        <TableContainer key="table-container">
          <Table stickyHeader aria-label="sticky table" key="table">
            <TableHead key="head">
              <TableRow key="theader">
                  <TableCell>Name</TableCell>
                  <TableCell>Height</TableCell>
                  <TableCell>Mass</TableCell>
                  <TableCell>Birth Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody key="tbody">
              {props.peopleProp.map(row => <Person {...row} onClick={props.onClick} />)}
            </TableBody>
          </Table>
        </TableContainer>
    );
};

export default PersonTable;
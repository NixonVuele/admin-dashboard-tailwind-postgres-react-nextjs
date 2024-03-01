import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text
} from '@tremor/react';
//import Toast from './toast';
function onRedirect(){
  window.location = "/rutas";
  //console.log(id);
}

export default function UsersTable({ users }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Celular</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Edad</TableHeaderCell>
          <TableHeaderCell>Ver ruta</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.nombre}</TableCell>
            <TableCell>
              <Text>{user.ciudad}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.edad}</Text>
            </TableCell>
            <TableCell>
              <button className='Btn' onClick={onRedirect}> Ver Ruta</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

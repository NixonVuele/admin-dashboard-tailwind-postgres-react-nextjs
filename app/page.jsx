"use client";
import { sql } from '@vercel/postgres';
import { Card, Title, Text } from '@tremor/react';
import Search from './components/search';
import UsersTable from './table';
import { useEffect,useState } from 'react';
import { db } from '../app/config/firebase'


import {fetchRoutesFromDataBase, fetchUsersFromDataBase} from '../app/config/consultas'

export default function Home() {
  const [users, setUsers] = useState([]);
  const groupSocial= 'Adultos Mayores'

  const fetchData = async () => {
    try {
      const usersData = await fetchUsersFromDataBase(db);
      console.log(usersData);
      setUsers(usersData);
      //console.log(usersData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>Usuarios a cargo de {groupSocial}</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}

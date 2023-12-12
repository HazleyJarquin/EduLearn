// UserList.tsx

import { Table, Tbody, Thead } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const ConApi: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    // Realiza la primera solicitud al cargar el componente
    fetchUsers();

    // Configura el intervalo de Polling (por ejemplo, cada 5 segundos)
    const pollingInterval = setInterval(fetchUsers, 5000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(pollingInterval);
  }, []);

  return (
    <div>
      <h2>Tabla de Usuarios</h2>
      <Table>
        <Thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Created_at</th>
          </tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.created_at}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

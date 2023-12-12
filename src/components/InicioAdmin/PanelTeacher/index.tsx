import { useEffect, useState } from "react";
import { Box, Heading, Table, Tbody, Thead } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const PanelTeacher = () => {
  const [teachers, setTeachers] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/showTeachers");
      const data = await response.json();
      setTeachers(data);
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
    <Box>
      <Heading as={"h2"}>Tabla de Maestros</Heading>
      <Table textAlign={"center"}>
        <Thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Created_at</th>
          </tr>
        </Thead>
        <Tbody overflowY={"scroll"}>
          {teachers.map((teacher, index) => (
            <tr
              key={teacher.id}
              style={{
                background: index % 2 === 0 ? "white" : "blue",
                color: index % 2 === 0 ? "black" : "white",
              }}
            >
              <td>{teacher.id}</td>
              <td>{teacher.username}</td>
              <td>{teacher.email}</td>
              <td>{teacher.password}</td>
              <td>{teacher.created_at}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
      <Outlet />
    </Box>
  );
};

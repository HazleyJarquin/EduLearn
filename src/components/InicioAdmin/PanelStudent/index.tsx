import { useEffect, useState } from "react";
import { Box, Heading, Table, Tbody, Thead } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const PanelStudent = () => {
  const [students, setStudents] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/showStudents");
      const data = await response.json();
      setStudents(data);
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
      <Heading as={"h2"}>Tabla de Estudiantes</Heading>
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
        <Tbody>
          {students.map((student, index) => (
            <tr
              key={student.id}
              style={{
                background: index % 2 === 0 ? "white" : "blue",
                color: index % 2 === 0 ? "black" : "white",
              }}
            >
              <td>{student.id}</td>
              <td>{student.username}</td>
              <td>{student.email}</td>
              <td>{student.password}</td>
              <td>{student.created_at}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
      <Outlet />
    </Box>
  );
};

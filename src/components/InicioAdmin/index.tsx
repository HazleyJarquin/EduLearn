import { Outlet } from "react-router-dom";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { PanelTeacher } from "./PanelTeacher";
import { PanelStudent } from "./PanelStudent";
import { InsertStudent } from "./InsertStudent";
import { useState } from "react";
import { InsertTeacher } from "./InsertTeacher";

export const InicioAdmin = () => {
  const [opcions, setOpcions] = useState("");

  const handleShowStudent = () => {
    setOpcions("ShowStudent");
  };
  const handleShowTeacher = () => {
    setOpcions("ShowTeacher");
  };
  const handleInsertStudent = () => {
    setOpcions("InsertStudent");
  };
  const handleInsertTeacher = () => {
    setOpcions("InsertTeacher");
  };
  return (
    <Box w={"100%"} h={"100vh"} display={"flex"}>
      <Box w={"30%"} bg={"#FAFAFA"} shadow={"lg"}>
        <Box textAlign={"center"}>
          <Heading>Admin Panel</Heading>
        </Box>
        <Box w={"full"} display={"flex"} flexDirection={"column"} gap={"5px"}>
          <Button
            rounded={"none"}
            onClick={() => {
              handleShowTeacher();
            }}
          >
            ShowTeachers
          </Button>
          <Button
            rounded={"none"}
            onClick={() => {
              handleShowStudent();
            }}
          >
            ShowStudents
          </Button>
          <Button
            rounded={"none"}
            onClick={() => {
              handleInsertTeacher();
            }}
          >
            Insert Teacher
          </Button>
          <Button
            rounded={"none"}
            onClick={() => {
              handleInsertStudent();
            }}
          >
            Insert Student
          </Button>
        </Box>
      </Box>
      <Box width={"70%"} textAlign={"center"} p={"1em"}>
        {opcions === "ShowStudent" ? (
          <PanelStudent />
        ) : opcions === "ShowTeacher" ? (
          <PanelTeacher />
        ) : opcions === "InsertStudent" ? (
          <InsertStudent />
        ) : opcions === "InsertTeacher" ? (
          <InsertTeacher />
        ) : (
          <Text
            fontSize={"30px"}
            fontWeight={"bolder"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            Bienvenido
          </Text>
        )}
      </Box>
      <Outlet />
    </Box>
  );
};

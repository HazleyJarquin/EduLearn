import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { InicioBody } from "../InicioBody";
import { Cursos } from "../Cursos";

export const InicioPage = () => {
  return (
    <Box
      id="inicio"
      w={"full"}
      h={"100%"}
      __css={{
        backgroundImage:
          "linear-gradient(0deg, rgba(255,255,255,0.85), rgba(255,255,255,0.85) ), url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
      }}
      // bgGradient="linear(to-r, gray.100, gray.200)"
      display={"flex"}
      flexDirection={"column"}
    >
      <Box h={"100vh"}>
        <Header />
        <InicioBody />
      </Box>
      <Box h={"50vh"}>
        <Cursos />
      </Box>
    </Box>
  );
};

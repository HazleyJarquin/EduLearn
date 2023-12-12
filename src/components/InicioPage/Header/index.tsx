import { Box, Button, Link as ChakraLink, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import { LockIcon } from "@chakra-ui/icons";

export const Header = () => {
  return (
    <Box
      // bg={"#ffb990"}
      px={"20px"}
      w={"100%"}
      h={"10vh"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position="fixed" // Establecer la posición fija
      width="100%" // Hacer que la barra ocupe el 100% del ancho
      zIndex={1000}
    >
      <ChakraLink href={"#inicio"} _hover={{ textStyle: "none" }}>
        <Text color={"#FFFFFF"} fontSize={"20px"} fontWeight={"bold"}>
          Inicio
        </Text>
      </ChakraLink>

      <Link to={"/login"}>
        <Button
          rounded={"1em"}
          bg={"#FFFFFF"}
          color={"#F28500"}
          _hover={{
            backgroundColor: "#F4F4F4",

            transform: "translateY(-2px)",
          }}
          _active={{
            transform: "translateY(-1px)",
          }}
          transition={"all 0.3s"}
        >
          <LockIcon />
        </Button>
      </Link>
    </Box>
  );
};

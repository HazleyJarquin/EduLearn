import { Box, Image, UnorderedList, ListItem, Link } from "@chakra-ui/react";

import Logo from "../../../assets/EduLearn2.png";

export const Header = () => {
  return (
    <Box
      bg={"white"}
      px={"20px"}
      w={"100%"}
      h={"10vh"}
      display={"flex"}
      justifyContent={"space-between"}
      position="fixed" // Establecer la posición fija
      width="100%" // Hacer que la barra ocupe el 100% del ancho
      zIndex={1000}
    >
      <Image src={Logo} />

      <UnorderedList
        listStyleType={"none"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        color={"black"}
        fontSize={"1.2em"}
      >
        <ListItem>
          <Link
            href="#inicio"
            _hover={{ textDecoration: "none", color: "blue" }}
          >
            Inicio
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="#cursos"
            _hover={{ textDecoration: "none", color: "blue" }}
          >
            Cursos
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

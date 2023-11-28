import { Box, Image, UnorderedList, ListItem, Link } from "@chakra-ui/react";

import Logo from "../../../assets/EduLearn2.png";

export const Header = () => {
  return (
    <Box
      bg={"white"}
      px={"20px"}
      w={"100%"}
      h={"10vh"}
      position="absolute"
      display={"flex"}
      justifyContent={"space-between"}
      zIndex={999}
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
          <Link _hover={{ textDecoration: "none", color: "blue" }}>Inicio</Link>
        </ListItem>
        <ListItem>
          <Link _hover={{ textDecoration: "none", color: "blue" }}>Cursos</Link>
        </ListItem>
        <ListItem>
          <Link _hover={{ textDecoration: "none", color: "blue" }}>
            Contacto
          </Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

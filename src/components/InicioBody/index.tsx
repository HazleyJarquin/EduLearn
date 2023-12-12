import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

import { motion, useAnimation } from "framer-motion";

import Logo from "../../assets/LogoSanNicolas.png";

import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LockIcon } from "@chakra-ui/icons";

export const InicioBody = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (value: any) => {
    if (value instanceof Date) {
      setDate(value);
    } else if (Array.isArray(value) && value.length > 0) {
      // Manejar rango de fechas
      console.log("Rango de fechas:", value);
      // Puedes hacer algo con el rango de fechas aquí si es necesario
    }
  };

  const MotionBox = motion(Box);

  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Ajusta el valor según tus necesidades
    controls.start({ opacity: 0 + scrollY / 500 });
  };

  useEffect(() => {
    // Suscribe la función de manejo de scroll al evento
    window.addEventListener("scroll", handleScroll);
    // Limpia el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      h={"100vh"}
    >
      <MotionBox
        w={"100%"}
        h={"full"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
        color={"white"}
        fontWeight={"bold"}
        initial={{ opacity: 0 }} // Agrega opacity: 0 en initial
        animate={{ opacity: 1 }} // Agrega opacity: 1 en animate
        transition={{ duration: 2, type: "ease-in-out", stiffness: 80 }}
      >
        <Box
          w={["90%", "50%"]}
          textAlign={"center"}
          h={"30%"}
          rounded={"sm"}
          bg={"transparent"}
          borderWidth={"5px"}
          borderColor={"white"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"5px"}
          // boxShadow="0 0 10px 5px rgba(255, 255, 255, 0.5)"
        >
          <Heading>
            Bienvenido a <span style={{ color: "#F28500" }}>San Nicolas</span>
          </Heading>
          <Text
            fontSize={"20px"}
            borderBottom={"2px"}
            borderBottomColor={"blue"}
          >
            Sabiduria, Valor y Union
          </Text>
        </Box>

        <Box display={"flex"} flexDirection={["column", "row"]} gap={"10px"}>
          <Link to={"/login"}>
            <Button
              width={"120px"}
              display={"flex"}
              gap={"5px"}
              textAlign={"center"}
              rounded={"1em"}
              bg={"#FFFFFF"}
              color={"blue"}
              _hover={{
                backgroundColor: "#F4F4F4",

                transform: "translateY(-2px)",
              }}
              _active={{
                transform: "translateY(-1px)",
              }}
              transition={"all 0.3s"}
            >
              <LockIcon /> Admin
            </Button>
          </Link>
          <Link to={"/loginTeacher"}>
            <Button
              display={"flex"}
              width={"120px"}
              gap={"5px"}
              textAlign={"center"}
              rounded={"1em"}
              bg={"#FFFFFF"}
              color={"blue"}
              _hover={{
                backgroundColor: "#F4F4F4",

                transform: "translateY(-2px)",
              }}
              _active={{
                transform: "translateY(-1px)",
              }}
              transition={"all 0.3s"}
            >
              <LockIcon /> Maestro
            </Button>
          </Link>
          <Link to={"/loginEstudiante"}>
            <Button
              display={"flex"}
              width={"120px"}
              gap={"5px"}
              textAlign={"center"}
              rounded={"1em"}
              bg={"#FFFFFF"}
              color={"blue"}
              _hover={{
                backgroundColor: "#F4F4F4",

                transform: "translateY(-2px)",
              }}
              _active={{
                transform: "translateY(-1px)",
              }}
              transition={"all 0.3s"}
            >
              <LockIcon /> Estudiante
            </Button>
          </Link>
        </Box>
      </MotionBox>
    </Box>
    // Inpiracion de la pagina
    // https://www.uplabs.com/posts/e-commerce-website-hero-landing-page-ui-design?utm_source=extension&utm_medium=click&utm_campaign=muzli
  );
};

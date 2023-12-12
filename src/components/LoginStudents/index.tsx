import {
  Box,
  Button,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";

import { Outlet } from "react-router-dom";

import loginImage from "../../assets/SanNicolasLogin.png";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const StudentLogin = () => {
  const [isShow, setShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Inicio de sesión exitoso");
        window.location.href = "/inicioStudent";
      } else {
        const data = await response.json();
        console.error("Error en el inicio de sesión:", data.message);
        Swal.fire({
          title: "Correo no registrado o contraseña incorrecta",
          text: "Favor registrarse o ingresar datos correctos",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
  };

  return (
    <VStack
      spacing={4}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgGradient={["linear(to-b, #ECE9E6, #FFFFFF)"]}
      w={"100%"}
      h={"100vh"}
    >
      <Box w="90%" h={"90%"} display={"flex"} rounded={"lg"} shadow={"md"}>
        <Box
          w={"60%"}
          overflow={"hidden"}
          roundedTopLeft={"lg"}
          roundedBottomLeft={"lg"}
        >
          <Image
            roundedTopLeft={"lg"}
            roundedBottomLeft={"lg"}
            w={"100%"}
            h={"full"}
            src={loginImage}
            style={{ filter: "brightness(50%)" }}
            __css={{ transition: "transform 0.3s ease-in-out" }}
            _hover={{
              transform: "scale(1.2)",
            }}
            objectFit={"cover"}
          />
        </Box>
        <Box
          w={"40%"}
          bg={"white"}
          roundedTopRight={"lg"}
          roundedBottomRight={"lg"}
          p={"1em"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"50px"}
        >
          <Box>
            <Heading size="lg" color={"blue"}>
              Iniciar Sesion
            </Heading>
          </Box>
          <Box>
            <form onSubmit={handleSubmit}>
              <FormLabel>Enter Your Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                mb={5}
              />
              <FormLabel>Enter your Password</FormLabel>
              <InputGroup>
                <Input
                  type={isShow ? "text" : "password"}
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  mb={5}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    bg={"transparent"}
                    h="1.75rem"
                    size="sm"
                    onClick={() => {
                      setShow(!isShow);
                    }}
                    _hover={{
                      bg: "transparent",
                    }}
                  >
                    {isShow ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button
                type="submit"
                bg={"blue"}
                color={"white"}
                w={"full"}
                _hover={{
                  bgColor: "purple",
                }}
              >
                Iniciar sesion
              </Button>
            </form>
          </Box>
          <Text color={"blue"}>Olvido su contraseña?</Text>
        </Box>
      </Box>
      <Outlet />
    </VStack>
  );
};

import {
  Box,
  Button,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export const InsertStudent = () => {
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
      const response = await fetch("http://localhost:3001/api/insertstudents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Usuario insertado con éxito");
        Swal.fire({
          title: "Has sido registrado con exito",
          text: "Inicia sesion con tu nueva cuenta",
          icon: "success",
        });
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      } else {
        console.error("Error al insertar usuario");
        Swal.fire({
          title: "Error al Registrarse",
          text: "Correo ya registrado",
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
      w={"100%"}
      h={"100%"}
    >
      <Box w="100%" h={"100%"} display={"flex"}>
        <Box
          w={"full"}
          bg={"white"}
          roundedTopLeft={"lg"}
          roundedBottomLeft={"lg"}
          p={"1em"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"50px"}
        >
          <Box>
            <Heading size="lg" color={"blue"}>
              Registrar Estudiante
            </Heading>
          </Box>
          <Box>
            <form onSubmit={handleSubmit}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                value={formData.username}
                onChange={handleChange}
                mb={5}
              />
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                mb={5}
              />
              <FormLabel>Create a Password</FormLabel>
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
                Sign-Up
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </VStack>
  );
};

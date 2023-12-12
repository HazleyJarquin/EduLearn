import {
  Box,
  Button,
  FormLabel,
  Heading,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import Swal from "sweetalert2";

import { log } from "../../api/apiEduLearn";

export const SignUp = () => {
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
      const response = await fetch("http://localhost:3001/api/users", {
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
      bgGradient={["linear(to-b, #ECE9E6, #FFFFFF)"]}
      w={"100%"}
      h={"100vh"}
    >
      <Box w="90%" h={"90%"} display={"flex"} rounded={"lg"} shadow={"md"}>
        <Box
          w={"40%"}
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
              Registrarse
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
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                mb={5}
              />
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
        <Box
          w={"60%"}
          overflow={"hidden"}
          roundedTopRight={"lg"}
          roundedBottomRight={"lg"}
        >
          {log.map((l) => (
            <Image
              roundedTopRight={"lg"}
              roundedBottomRight={"lg"}
              h={"full"}
              key={l.id}
              src={l.url}
              style={{ filter: "brightness(50%)" }}
              __css={{ transition: "transform 0.3s ease-in-out" }}
              _hover={{
                transform: "scale(1.2)",
              }}
            />
          ))}
        </Box>
      </Box>
    </VStack>
  );
};

// Login.tsx

import React, { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../firebaseConfig";

import Swal from "sweetalert2";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Usuario autenticado:", user);
      Swal.fire({
        title: "Usuario autenticado",
        text: "Bienvenido " + user.email,
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Usuario no encontrado",
        text: "Revisa e ingresa nuevamente",
        icon: "error",
      });
      console.error("Error al iniciar sesión:", error.message);
    }
  };

  return (
    <Box>
      <Heading fontSize={"medium"}>Iniciar Sesión</Heading>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <br />
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <br />
      <Button onClick={handleLogin}>Iniciar Sesión</Button>
    </Box>
  );
};

export default Login;

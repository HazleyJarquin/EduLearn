import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
// import { Login } from "../Login";
import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  database,
  ref,
  set,
} from "../../firebaseConfig";

function ModalRegistrar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSignUp = async () => {
    try {
      // Crear un nuevo usuario con correo electrónico y contraseña
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Obtener el ID del usuario recién creado
      const userId = userCredential.user?.uid;

      // Guardar información adicional en la base de datos
      if (userId) {
        // Ejemplo con Realtime Database
        const userDatabaseRef = ref(database, `users/${userId}`);
        await set(userDatabaseRef, {
          name,
          age,
        });

        console.log("Usuario registrado exitosamente");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
    }
  };

  return (
    <Box mt={"20px"} w={"50px"}>
      <Button
        h={"50px"}
        colorScheme="purple"
        p={"20px"}
        rounded={"20px"}
        boxShadow={"0px 10px 20px -6px #0000ff"}
        _hover={{
          backgroundColor: "#6868f5",

          transform: "translateY(-2px)",
        }}
        _active={{
          transform: "translateY(-1px)",
        }}
        transition={"all 0.3s"}
        onClick={onOpen}
      >
        Registrarse
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input
                ref={initialRef}
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input
                type="number"
                placeholder="Edad"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            {/* <Login /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSignUp}>
              Registrarse
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ModalRegistrar;

// RegisterComponent.tsx

import React, { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  database,
  ref,
  set,
} from "../../firebaseConfig";

export const Login: React.FC = () => {
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
    <div>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Registrarse</button>
    </div>
  );
};

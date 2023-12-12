import { Box, Button } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn } from "../Login";
import { SignUp } from "../SignUp";

export const LogAndSign = () => {
  const [isSign, setIsSign] = useState(false);

  return (
    <Box w={"100%"} h={"100vh"} bgGradient={["linear(to-b, #ECE9E6, #FFFFFF)"]}>
      <Box position={"absolute"} w={"full"} mt={"10px"}>
        <AnimatePresence exitBeforeEnter={false} mode="wait">
          {isSign ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <LogIn />
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <SignUp />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
      <Button
        position={"relative"}
        onClick={() => {
          setIsSign(!isSign);
        }}
      >
        {isSign ? "Registrarse" : "Iniciar sesión"}
      </Button>
    </Box>
  );
};

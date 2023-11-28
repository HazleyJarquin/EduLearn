import { Box, Image, Heading } from "@chakra-ui/react";
import ImgBody from "../../assets/ImgBody.png";
import { motion } from "framer-motion";
import ModalRegistrar from "../ModalRegistrar";

export const InicioBody = () => {
  const MotionBox = motion(Box);
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={"20px"}
      px={"20px"}
      mt={"15vh"}
      w={"full"}
      h={"90vh"}
    >
      <MotionBox
        w={"50%"}
        h={"full"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        color={"white"}
        fontWeight={"bold"}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      >
        <Heading
          textTransform={"capitalize"}
          w={"100%"}
          color={"#122F5F"}
          fontSize={"4em"}
        >
          Lo mejor para <span style={{ color: "#FFA500" }}>Emprender</span>
          <br /> tu camino al{" "}
          <span style={{ color: "#FFA500" }}>Conocimiento</span>.
        </Heading>

        <Box display={"flex"}>
          <ModalRegistrar />
        </Box>
      </MotionBox>
      <MotionBox
        w={"45%"}
        initial={{ y: "-10%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image rounded={"md"} src={ImgBody} pointerEvents={"none"} />
      </MotionBox>
    </Box>
    // Inpiracion de la pagina
    // https://www.uplabs.com/posts/e-commerce-website-hero-landing-page-ui-design?utm_source=extension&utm_medium=click&utm_campaign=muzli
  );
};

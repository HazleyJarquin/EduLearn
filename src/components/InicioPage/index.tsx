import { Box, Image } from "@chakra-ui/react";
import { Header } from "./Header";
import { InicioBody } from "../InicioBody";
// import { Cursos } from "../Cursos";

import { ConApi } from "../ConApi";
import { Cursos } from "../Cursos";
import { Swiper, SwiperSlide } from "swiper/react";

import { imgs } from "../../api/apiEduLearn";

import { Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export const InicioPage = () => {
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      position={"relative"}
      id="inicio"
      bg={"#FFFFFF"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Box h={"100vh"} w={"100%"} position={"absolute"} zIndex={999}>
        <InicioBody />
      </Box>
      <Box position={"relative"} w={"100%"} h={"100%"} bg={"black"}>
        <Swiper
          modules={[Pagination, Autoplay, A11y]}
          slidesPerView={4}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ height: "100%", width: "100%", opacity: 0.2 }}
        >
          {imgs.map((img) => (
            <SwiperSlide key={img.id}>
              <Image
                cursor={"pointer"}
                position={"relative"}
                // rounded={"lg"}
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
                src={img.url}
                _hover={{
                  filter: "brightness(40%)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      {/* <Box>
       {" "}
       <Box
         id="inicio"
         w={"100%"}
         h={"100vh"}
         bg={"black"}
         position={"absolute"}
       >
         
       </Box>
        */}

      {/* <motion.div animate={controls}>
      
        <InicioBody />
      </motion.div> */}
      {/* <Box mt={"100px"} h={"50vh"}>
        <ConApi />
        <Cursos />
      </Box>
      </Box> 
     </Box>   */}
    </Box>
  );
};

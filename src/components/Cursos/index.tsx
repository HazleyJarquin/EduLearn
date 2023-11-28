import { Box, Heading, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImgBody from "../../assets/ImgBody.png";

import { Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";

export const Cursos = () => {
  const imgs = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Ciencia",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Tecnologia",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Arte",
    },
    { id: 4, url: ImgBody, title: "Lengua Extranjera" },
    { id: 5, url: ImgBody, title: "Matematica" },
    { id: 6, url: ImgBody, title: "Matematica" },
    { id: 7, url: ImgBody, title: "Matematica" },
    { id: 8, url: ImgBody, title: "Matematica" },
    { id: 9, url: ImgBody, title: "Matematica" },
  ];

  const MotionBox = motion(Box);
  return (
    <MotionBox
      w={"100%"}
      h={"100vh"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
    >
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {imgs.map((img) => (
          <SwiperSlide key={img.id}>
            <Image src={img.url} />
            <Heading>{img.title}</Heading>
          </SwiperSlide>
        ))}
      </Swiper>
    </MotionBox>
  );
};

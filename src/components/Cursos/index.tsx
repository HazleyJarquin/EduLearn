import { Box, Heading, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import ImgBody from "../../assets/ImgBody.png";

import { imgs } from "../../api/apiEduLearn";

import { Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";

export const Cursos = () => {
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

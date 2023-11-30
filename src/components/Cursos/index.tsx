import {
  Box,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
// import ImgBody from "../../assets/ImgBody.png";

import { imgs } from "../../api/apiEduLearn";

import { Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";
import { useState } from "react";

export const Cursos = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    url: string;
    title: string;
    description: string;
  } | null>(null);

  const handleImageClick = (img: {
    id: number;
    url: string;
    title: string;
    description: string;
  }) => {
    setSelectedImage(img);
    onOpen();
  };

  const MotionBox = motion(Box);
  return (
    <MotionBox
      w={"100%"}
      h={"50vh"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
      __css={{
        backgroundImage:
          "linear-gradient(0deg, rgba(255,0,0,0.85), rgba(255,255,0,0.85) ), url(https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay, A11y]}
        spaceBetween={40}
        slidesPerView={4}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ height: "100%", padding: "10px" }}
      >
        {imgs.map((img) => (
          <SwiperSlide key={img.id} onClick={() => handleImageClick(img)}>
            <Image
              cursor={"pointer"}
              position={"relative"}
              rounded={"lg"}
              w={"500px"}
              h={"90%"}
              border={"2px"}
              borderColor={"white"}
              objectFit={"cover"}
              src={img.url}
              _hover={{
                filter: "brightness(40%)",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {selectedImage && <Heading>{selectedImage.title}</Heading>}
            <br />
            {selectedImage && (
              <Text fontWeight={"bold"}>{selectedImage.description}</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

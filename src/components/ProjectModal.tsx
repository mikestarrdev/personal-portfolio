import React from "react";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";

type ProjectModalProps = {
  title: string;
  thumbnail: string;
  videoLink?: string;
};

/**
 * @remarks button is replaced with a thumbnail of Vimeo video
 * @returns modal with embedded Vimeo link
 */
const ProjectModal = ({ title, thumbnail, videoLink }: ProjectModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const video = (url: string | null, light: boolean) => {
    if (url) {
      return (
        <ReactPlayer
          url={url}
          w="fit"
          position="absolute"
          top={0}
          left={0}
          controls
          light={light}
          onEnded={onClose}
        />
      );
    } else {
      return null;
    }
  };

 const handleModalClick = () => videoLink ? onOpen() : null

  return (
    <>
      <Tooltip
        label={videoLink ? "Click for video demo" : null}
        aria-label="Click for video demo"
        fontSize="lg"
        placement="bottom"
        hasArrow
      >
        {/* Box is a replacement for button */}
        <Box
          onClick={handleModalClick}
          boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        >
          <Image
            src={`${thumbnail}`}
            alt={`${title} demo`}
            _dark={{
              border: "4px white solid",
              rounded: "md",
            }}
            _hover={{
              cursor: videoLink && "pointer",
            }}
          />
        </Box>
      </Tooltip>

      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title} - video demo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box position="relative" overflow="scroll">
              {videoLink ? video(videoLink, false) : null}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="links" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;

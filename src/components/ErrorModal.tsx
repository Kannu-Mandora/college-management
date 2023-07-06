"use client";
import { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
export default function ErrorModal({
  heading,
  content,
  isTrue,
}: {
  heading: string;
  content: string;
  isTrue?: boolean;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    isTrue ? onOpen() : onClose();
    return () => {
      onClose();
    };
  }, [isTrue, onClose, onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heading}</ModalHeader>
          <ModalBody paddingBottom={"2rem"}>{content}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

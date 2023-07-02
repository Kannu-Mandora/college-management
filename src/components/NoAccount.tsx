import { memo, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (window.location.href.match("error")) onOpen();
    return () => {
      onClose();
    };
  }, [onClose, onOpen]);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Error In Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You&apos;re not having any account on this website, try to
            <Link
              href="/sign-up"
              className="text-blue-600 hover:underline underline-offset-2"
            >
              {" "}
              Sign Up
            </Link>{" "}
            on this website.
          </ModalBody>
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
export default memo(BasicUsage);

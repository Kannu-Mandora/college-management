"use client";
import { useRef } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import StudentPanel from "./StudentPanel";
import { FcSettings } from "react-icons/fc";

function StudentDrawerPanel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button
        ref={btnRef}
        backgroundColor="transparent"
        _hover={{ backgroundColor: "transparent" }}
        onClick={onOpen}
      >
        <FcSettings className="text-4xl p-1" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <StudentPanel />
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default StudentDrawerPanel;

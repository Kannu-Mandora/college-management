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
import Image from "next/image";
import StudentPanel from "./StudentPanel";

function DrawerExample({
  userImageLink,
}: {
  userImageLink: string | undefined;
}) {
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
        <Image
          src={userImageLink ?? "/images/logo.png"}
          width={50}
          height={50}
          alt=""
          className="rounded-full bg-white p-2 border-2 border-[--main]"
        />
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
export default DrawerExample;

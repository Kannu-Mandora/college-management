"use client";
import { useLayoutEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import StudentPanel from "./StudentPanel";
import Image from "next/image";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

function StudentDrawerPanel(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const [session, setSession] = useState<Session | null>();
  const getSessionData = async () => {
    const session = await getSession();
    setSession(session);
  };
  useLayoutEffect(() => {
    getSessionData();
  }, [session]);

  return (
    <>
      <Button
        ref={btnRef}
        backgroundColor="transparent"
        _hover={{ backgroundColor: "transparent" }}
        onClick={onOpen}
      >
        <Image
          src={session?.user?.image!}
          width={40}
          height={40}
          alt="Profile Image"
          className="p-1 rounded-full"
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
export default StudentDrawerPanel;

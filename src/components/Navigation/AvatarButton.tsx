import { useState, useLayoutEffect, MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function BasicMenu() {
  const [session, setSession] = useState<Session | null>();
  const getSessionData = async () => {
    const session = await getSession();
    setSession(session);
  };
  useLayoutEffect(() => {
    getSessionData();
  }, []);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{border: "2px solid var(--secondary)", borderRadius: "100%", padding: "0.2rem", minWidth: "0"}}
      >
        <Image
          src={session?.user?.image!}
          width={30}
          height={30}
          alt=""
          className="rounded-full"
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/profile">Manage Account</Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            signOut({ callbackUrl: "/" });
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

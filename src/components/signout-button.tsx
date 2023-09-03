"use client";

import { signOut } from "next-auth/react";
import { ReactNode } from "react";
import { Button } from "./ui/button";

interface LoginButtonProperties {
  children: ReactNode;
  className?: string;
}

const signOutHandler = async () => {
  try {
    await signOut({ callbackUrl: "/" });
  } catch (error) {
    console.log(error);
  }
};

export function SignoutButton({ children, className }: LoginButtonProperties) {
  return (
    <Button className={className} onClick={signOutHandler}>
      {children}
    </Button>
  );
}

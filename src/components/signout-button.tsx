"use client";

import { signOut } from "next-auth/react";
import { ReactNode } from "react";
import { Button } from "./ui/button";

interface LoginButtonProperties {
  children: ReactNode;
  className?: string;
}

export function SignoutButton({ children, className }: LoginButtonProperties) {
  return (
    <Button className={className} onClick={() => signOut()}>
      {children}
    </Button>
  );
}

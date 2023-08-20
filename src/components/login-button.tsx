"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { ReactNode } from "react";

interface LoginButtonProperties {
  children: ReactNode;
}

export function LoginButton({ children }: LoginButtonProperties) {
  return (
    <Button
      onClick={() =>
        signIn("credentials", { username: "jsmith", password: "1234" })
      }
    >
      {children}
    </Button>
  );
}

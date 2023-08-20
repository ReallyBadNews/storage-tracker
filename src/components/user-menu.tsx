import { Button, buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { SignoutButton } from "./signout-button";

export async function UserMenu() {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  return (
    <>
      {session ? (
        // <Link
        //   href="/profile"
        //   className={buttonVariants({
        //     size: "sm",
        //     variant: "ghost",
        //   })}
        // >
        //   {`${session.user?.name} profile`}
        // </Link>
        <SignoutButton
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          {`${session.user?.name} profile`}
        </SignoutButton>
      ) : (
        <Link
          href="/login"
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          Login
        </Link>
      )}
    </>
  );
}

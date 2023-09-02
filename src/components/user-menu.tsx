import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

export async function UserMenu() {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  return (
    <>
      {session ? (
        <Link
          href="/profile"
          className={buttonVariants({ size: "sm", variant: "ghost" })}
        >{`${session.user?.name} profile`}</Link>
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

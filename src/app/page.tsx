import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-background container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Link className={buttonVariants({ variant: "outline" })} href="/login">
          Log in
        </Link>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <Button>hello</Button>
    //   </div>
    // </main>
    <section className="bg-background container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <Button>Hello</Button>
      </div>
    </section>
  );
}

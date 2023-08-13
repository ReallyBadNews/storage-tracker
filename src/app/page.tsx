import { LoginButton } from "@/components/login-button";

export default function Home() {
  return (
    <section className="bg-background container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <LoginButton>Log in</LoginButton>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "./use-toast";
import { signIn } from "next-auth/react";

interface LoginProperties {
  className?: string;
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .max(64, {
      message: "Password must be at most 64 characters.",
    })
    .refine(
      (value) => {
        return /\d/.test(value);
      },
      { message: "Password must contain at least one number." },
    ),
});

export function LoginForm({ className }: LoginProperties) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const searchParameters = useSearchParams();
  const callbackUrl = searchParameters.get("callbackUrl") || "/profile";

  console.log({ callbackUrl });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await signIn("credentials", {
        email: values.username,
        password: values.password,
        redirect: false,
        callbackUrl,
      });

      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, undefined, 2)}
            </code>
          </pre>
        ),
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors.forEach((error) => {
          toast({
            title: "An error occurred.",
            description: error.message,
          });
        });
      }
      if (error instanceof Error) {
        toast({
          title: "An error occurred.",
          description: error.message,
        });
      } else {
        toast({
          title: "An error occurred.",
          description: "An unknown error occurred.",
        });
      }
    }
  }

  return (
    <Form {...form}>
      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-4", className)}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

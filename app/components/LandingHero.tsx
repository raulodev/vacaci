"use client";
import { Toast } from "@/app/components/Toast";
import { Button } from "@/app/components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
});

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const LandingHero = ({
  title,
  subTitle,
  image,
}: {
  title: string;
  subTitle: string;
  image: string;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (data: { email: string }) => {
    await delay(2000); // Simulate a api call
    // await fetch("/api/lead", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });

    leadSubmit(data.email);

    setShowToast(true);
  };

  const leadSubmit = async (email: string) => {
    // Add your logic here
    console.log(email);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen selection:text-blue-500">
      <div className="flex flex-col items-center justify-center p-20 gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2>{subTitle}</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 rounded flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <input
              className="p-2 bg-gray-200 rounded-lg outline-none text-black placeholder:text-black/60"
              placeholder="Enter your email"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="dark:text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>

          <Button
            disabled={isSubmitting}
            text={isSubmitting ? "Submitting..." : "Submit"}
          />
        </form>
      </div>
      <div className="size-full justify-center items-center hidden md:flex">
        <Image
          className="object-cover rounded-lg size-full"
          src={image}
          alt="Next.js logo"
          priority
          width={500}
          height={500}
        />
      </div>

      <Toast
        message="Form submitted successfully"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

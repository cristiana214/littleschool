"use client";

import { useState, type FormEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mutation = useMutation({
    mutationFn: async (emailAddress: string) => {
      const res = await fetch("/api/send/waitlist/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailAddress }),
      });
      return res.json();
    },
    onSuccess: (data) => {
      setMessage(data.message || "Success!");
      setEmail("");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      setMessage(error.message || "Something went wrong");
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) mutation.mutate(email);
  };

  return (
    <section className="mx-auto mt-8 max-w-md rounded-lg ">
      <Card>
        <CardHeader>
          <CardTitle className="drop-shadow-md">Join the Waitlist</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 font-subdesc drop-shadow-md">
            Join our waitlist to be the first to know when new features and
            content are available!
          </p>
          {/* <WaitlistForm /> */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="rounded border p-2"
              required
            />
            <button
              type="submit"
              disabled={mutation.isPending}
              className="rounded bg-green-600 p-2 text-white hover:bg-orange-500"
            >
              {mutation.isPending ? "Submitting..." : "Join Now"}
            </button>
          </form>
          {message && <p className="mt-2 text-sm text-gray-600">{message}</p>}
        </CardContent>
      </Card>
    </section>
  );
}

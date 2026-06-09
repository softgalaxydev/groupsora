"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";

export default function AdminLoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {

      toast.error("Invalid credentials");

      return;
    }

    toast.success("Login successful");

    router.push("/admin");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <Navbar />
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">

        <h1 className="text-3xl font-bold text-black">
          Admin Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-5"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 border rounded-xl text-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 border rounded-xl text-black"
          />

          <button className="w-full bg-green-600 text-white p-4 rounded-xl font-semibold">
            Login
          </button>

        </form>

      </div>

    </main>
  );
}
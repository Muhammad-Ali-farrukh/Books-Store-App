"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      });

      if (res.error) {
        setError("Invalid credentials");
      } else {
        router.replace("/dashboard");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-700 to-pink-600 p-4">
      {/* Login Form Card */}
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-2">
          📚 BookStore Login
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Welcome back to your library
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold shadow-lg transition-all duration-300"
          >
            Login
          </button>

          <p className="text-right text-sm text-pink-500 hover:underline cursor-pointer">
            Forgot password?
          </p>
        </form>

        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link href="/Signupform" className="text-pink-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );``
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
          📚 BookVerse
        </div>

        {/* Login / Signup */}
        <div className="flex gap-3">
          <Link
            href="/Loginform"
            className="px-5 py-2 rounded-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/Signupform"
            className="px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className=" grid md:grid-cols-2 gap-10 px-8 md:px-16 py-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Discover Your Next <span className="text-indigo-600">Favorite Book</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Explore thousands of books from fiction, non-fiction, self-help,
            and more. Build your personal library and enjoy reading like never before.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="rounded-full px-8 py-6 text-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Browse Books
            </button>

            <button className="rounded-full px-8 py-6 text-lg border border-gray-300 hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books"
            className="rounded-2xl shadow-2xl w-[420px]"
          />
        </motion.div>
      </section>

    
      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t">
        © 2025 BookVerse. All rights reserved.
      </footer>
    </div>
  );
} 
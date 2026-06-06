"use client"
import React from "react"
import { useSession } from "next-auth/react"

export default function Footer() {
  const { data: session } = useSession()

  

  return (
    <footer className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-4 text-center mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Book Store. All rights reserved.
      </p>
    </footer>
  )
}

"use client"
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Userinfo = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push("/")
  }

  if (status === "loading") {
    return <div className="flex h-screen justify-center items-center">Loading...</div>
  }


  return (

    <div className="flex h-screen bg-gray-50">
      
      {/* Left section: user info card */}
      <div className=" mt-6 flex flex-col justify-center items-start bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 w-1/4 p-10 rounded-r-3xl shadow-2xl text-white">
        <h2 className="text-3xl font-bold mb-6">Welcome, {session?.user?.name}!</h2>
        <div className="mb-4 text-lg">
          <span className="font-semibold">Email:</span> {session?.user?.email}
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-50 transition-all"
        >
          Logout
        </button>
      </div>
       {/* Right section: home page hero */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-10">
          
          <div className="pl-8 flex flex-col items-start md:w-1/2 gap-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-lg text-gray-700">
              Explore the best books, all in one place.
            </p>
            <a href="/Allbooks">
              <button className="bg-indigo-600 text-white font-bold py-5 px-10 rounded-full text-xl shadow-lg hover:bg-indigo-700 transition-all">
                Discover Books
              </button>
            </a>
          </div>

          {/* Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
   src="/bookstore.png"
  alt="Book Store"
  width={500}   // specify your desired width
  height={500}  // specify your desired height
  className="rounded-3xl shadow-2xl object-cover"
  priority

  />
</div>

        </div>
      </div>
    
  )
}

export default Userinfo

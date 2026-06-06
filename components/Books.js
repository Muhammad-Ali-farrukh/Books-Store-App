"use client";
import React, { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";

export default function Books() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    async function loadBooks() {
      try {
        const res = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=40"
        
        );
        const data = await res.json();
        console.log(data)
        setBooks(data.items || []);
      } catch (error) {
        console.log(error);
      }
    }
    loadBooks();
  }, []);

  const getRandomPrice = () => (Math.random() * 50 + 10).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-10 drop-shadow-lg">
        Explore Your Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {books.map((book) => {
          const info = book.volumeInfo || {};

          const title = info.title || "No Title Available";
          const authors = info.authors?.join(", ") || "Unknown Author";
          const image =
            info.imageLinks?.thumbnail ||
            "https://via.placeholder.com/150x220?text=No+Image";
          const price = getRandomPrice();

          return (
            <div
              key={book.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>


              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                    {authors}
                  </p>
                  <p className="text-gray-900 font-bold mt-2">${price}</p>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => {
                      addToCart({
                        ...book,
                        price,
                      });
                      router.push("/cart");
                    }}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white py-2 rounded-full flex items-center justify-center gap-2 font-medium shadow-md transition-all duration-300"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    Add to Cart
                  </button>

                  <Link href={`/About/${book.id}`}>
                    <button className="px-4 py-1.5 text-sm rounded-full border border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-sm">
                      About
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

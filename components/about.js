"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function AboutBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/`
        );
        const data = await res.json();
        setBook(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchBook();
  }, [id]);

  const getRandomPrice = () => (Math.random() * 50 + 10).toFixed(2);

  if (!book || !book.volumeInfo) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center bg-white p-8 rounded-2xl shadow-md max-w-md">
          <div className="w-40 h-40 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <div className="text-6xl">ℹ️</div>

          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Your About page is Empty
          </h2>
          <p className="text-gray-600 mb-6">
            You haven't added any books to your cart yet.
          </p>
          <Link href="/Allbooks"><button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700">
            Browse Books
          </button></Link>
        </div>
      </div>
    );
  }

  const info = book.volumeInfo;

  const title = info.title || "No Title Available";
  const authors = info.authors?.join(", ") || "Unknown Author";
  const description =
    info.description || "No description available for this book.";
  const image =
    info.imageLinks?.thumbnail ||
    "https://via.placeholder.com/150x220?text=No+Image";
  const price = getRandomPrice();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex max-w-4xl w-full">

        {/* Book Cover */}
        <div className="flex-shrink-0 p-6">
          <img
            src={image}
            alt={title}
            className="w-36 h-52 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="p-8 flex flex-col gap-5">
          <h1 className="text-4xl font-extrabold text-gray-900">
            {title}
          </h1>

          <p className="text-lg text-gray-700">
            By <span className="font-semibold">{authors}</span>
          </p>

          <p className="text-gray-600 leading-relaxed line-clamp-4">
            {description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <div className="text-3xl font-bold text-purple-600">
              ${price}
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-2.5 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-50 transition">
                Add to Cart
              </button>
              <button className="px-6 py-2.5 rounded-full bg-purple-600 text-white hover:opacity-90 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

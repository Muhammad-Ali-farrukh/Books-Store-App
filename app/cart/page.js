"use client";
import { useCart } from "../context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total, book) => {
    const bookPrice = book.saleInfo?.listPrice?.amount || 10;
    const quantity = book.quantity || 1;
    return total + bookPrice * quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center bg-white p-8 rounded-2xl shadow-md max-w-md">
          <div className="w-40 h-40 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
            <div className="text-6xl">🛒</div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 mb-6">
            You haven't added any books to your cart yet.
          </p>
          <Link href="/Allbooks">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700">
              Browse Books
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Shopping Cart 🛒
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items - Left Side */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              {cart.map((book) => {
                const price = Number(book.saleInfo?.listPrice?.amount) || 10;
                const quantity = book.quantity || 1;
                const itemTotal = price * quantity;


                return (
                  <div
                    key={book.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Book Image */}
                      <div className="sm:w-1/4">
                        <img
                          src={book.volumeInfo.imageLinks?.thumbnail || "/book-placeholder.png"}
                          alt={book.volumeInfo.title}
                          className="w-full h-48 sm:h-full object-cover"
                        />
                      </div>

                      {/* Book Info */}
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {book.volumeInfo.title}
                            </h3>
                            <p className="text-gray-600 mb-1">
                              By {book.volumeInfo.authors}
                            </p>
                            <p className="text-purple-600 font-bold text-lg mb-4">
                              ${itemTotal.toFixed(2)}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(book.id)}
                            className="text-gray-400 hover:text-red-500 ml-4"
                          >
                            <XMarkIcon className="w-6 h-6" />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(book.id, - 1)}
                              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                            >
                              -
                            </button>
                            <span className="w-10 text-center font-medium">{Number(book.quantity||1)}</span>
                            <button
                              onClick={() => updateQuantity(book.id, + 1)}
                              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary - Right Side */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">{totalPrice > 50 ? "FREE" : "$5.99"}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-4">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-xl font-bold text-purple-600">
                    ${(totalPrice > 50 ? totalPrice : totalPrice + 5.99).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-purple-700 mb-4">
                Proceed to Checkout
              </button>

              <Link href="/Allbooks">
                <button className="w-full border border-purple-600 text-purple-600 py-3 rounded-lg font-medium hover:bg-purple-50">
                  Continue Shopping
                </button>
              </Link>

              {/* Security Message */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  🔒 Secure Checkout • 30-Day Returns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🚚</div>
            <h3 className="font-bold text-gray-900 mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">On orders over $50</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
            <p className="text-gray-600 text-sm">30-day return policy</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-900 mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm">Safe and secure</p>
          </div>
        </div>
      </div>
    </div>
  );
}

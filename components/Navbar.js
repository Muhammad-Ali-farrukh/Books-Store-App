import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold flex items-center gap-2">
        📚 Book Store
      </h1>

      {/* Links */}
      <ul className="flex gap-8 text-lg">
        <li className="hover:border-b-2 hover:border-yellow-300 transition-all">
          <Link href="/dashboard">Home</Link>
        </li>
        <li className="hover:border-b-2 hover:border-yellow-300 transition-all">
          <Link href="/About/id">About</Link>
        </li>
        <li className="hover:border-b-2 hover:border-yellow-300 transition-all">
          <Link href="/Allbooks">All Books</Link>
        </li>
        <li className="hover:border-b-2 hover:border-yellow-300 transition-all">
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

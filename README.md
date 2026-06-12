# Book Store App

A full-stack Book Store web application built with Next.js, allowing users to browse and search books fetched live from the Google Books API, add books to a cart, view order details, and calculate the total bill — with user authentication and a MongoDB-backed database.

## 🚀 Features

- **Book Search & Browse** – Fetches real-time book data (titles, covers, authors, descriptions) from the Google Books API
- **Add to Cart** – Users can add individual books to their cart
- **Order Details & Bill Calculation** – Cart displays selected books with quantities, and the total bill is calculated dynamically using JavaScript math operations
- **User Authentication** – Secure login/signup with protected routes via Next.js middleware
- **REST API Routes** – Backend logic handled through Next.js API routes
- **Database Integration** – MongoDB used for storing user data and related records
- **Reusable Components** – Modular React components for a consistent UI
- **Route Protection** – Middleware restricts access to authenticated users where needed

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Frontend:** React.js, CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB (Mongoose models)
- **External API:** Google Books API
- **Authentication:** Middleware-based route protection


## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Frontend:** React.js, CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB (Mongoose models)
- **External API:** Google Books API
- **Authentication:** Middleware-based route protection

## ⚙️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB instance (local or Atlas)
- Google Books API key (optional, depending on usage limits)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Muhammad-Ali-farrukh/Books-Store-App.git
cd Books-Store-App
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables (create a `.env.local` file)
   
4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📌 Future Improvements

- Shopping cart and checkout flow
- Save favorite books to user profile
- Advanced search filters (genre, author, publish date)
- Book reviews and ratings

## 👤 Author

**Muhammad Ali Farrukh**
- GitHub: [@Muhammad-Ali-farrukh](https://github.com/Muhammad-Ali-farrukh)
- LinkedIn: [Ali Farrukh](https://www.linkedin.com/in/ali-farrukh-277a61318)

## 📄 License

This project is open source and available for learning purposes.

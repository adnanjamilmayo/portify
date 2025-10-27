export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <main className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Next.js
        </h1>
        <p className="text-gray-600 mb-6">
          Your project is ready with Tailwind CSS!
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
          Get Started
        </button>
      </main>
    </div>
  );
}


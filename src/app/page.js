import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-white" style={{ background: 'linear-gradient(180deg, #AD8920, #FFFFFF)' }}>
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Portify ⚡️</h1>
        <p className="text-gray-700 text-lg mb-8">
          Build your AI-powered developer portfolio in minutes.
        </p>
        <a href="/signup" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold">
          Get Started
        </a>
      </div>
    </div>
  );
}

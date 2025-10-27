export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-10 py-4 shadow-lg" style={{ background: '#1a1a1a', color: '#FFFFFF', boxShadow: '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)' }}>
        <h2 className="text-2xl font-bold">Portify</h2>
        
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <div className="flex gap-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Resume</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Template</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">About</a>
          </div>
          
          {/* Divider */}
          <div className="text-gray-600">|</div>
          
          {/* Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 text-white hover:text-gray-300 transition-colors font-medium">
              Login
            </button>
            <a href="/signup" className="px-6 py-2 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-semibold transition-colors">
              Signup
            </a>
          </div>
        </div>
      </nav>
    );
  }
  
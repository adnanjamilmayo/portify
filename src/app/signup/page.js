import Navbar from "@/components/Navbar";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(180deg, #AD8920, #FFFFFF)' }}>
      <Navbar />
      
      <div className="flex flex-1">
      {/* Left Side - Form */}
      <div className="w-full md:w-2/5 p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Get Started Now</h1>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              I agree to the terms & policy
            </label>
          </div>

          <div className="mb-4">
            <button 
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Signup
            </button>
          </div>

          <div className="flex items-center mb-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full mx-3"></div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          <div className="mb-4">
            <button className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </div>

          <div className="mb-4">
            <button className="w-full flex items-center justify-center gap-3 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.65 2.33-1.17 4.08-1.01 1.25.14 2.19.81 2.75 1.55-2.71 1.62-4.5 4.78-4.5 8.5 0 2.85 1.26 3.58 3.09 3.13z"/>
              </svg>
              Sign in with Apple
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Have an account? <a href="/login" className="text-blue-600 hover:underline">Sign In</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Section */}
      <div className="hidden md:flex w-3/5 items-center justify-center p-12">
        <div className="relative w-full max-w-2xl">
          {/* Resume Card */}
          <div className="bg-white shadow-2xl rounded-lg transform rotate-2">
            <div className="flex">
              {/* Left Sidebar */}
              <div className="w-40 bg-gray-800 text-white p-6 rounded-l-lg">
                <h2 className="text-2xl font-bold mb-4">JOANNA RADOS</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-300">177 Great Portland Street, London WSW 6PQ</p>
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">+44 (0)20 7666 8555</p>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">joanna.doel@gmail.com</p>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-6 text-gray-700">
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Summary</h3>
                  <p className="text-sm">Professional developer with 5+ years of experience.</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Skills</h3>
                  <p className="text-sm">Project Management • Strong Decision Maker • Problem Solver</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-2">Experience</h3>
                  <p className="text-sm font-semibold">Web Developer</p>
                  <p className="text-xs text-gray-500">2020 - Present</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Education</h3>
                  <p className="text-sm">Bachelor of Science - Computer Information Systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 left-4 w-16 h-16 bg-green-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 right-8 w-12 h-12 bg-amber-500 rounded-full opacity-20"></div>
        </div>
      </div>
      </div>
    </div>
  );
}

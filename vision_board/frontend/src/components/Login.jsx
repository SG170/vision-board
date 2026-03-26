import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 border border-gray-border overflow-hidden relative">

        {/* Decorative pastel blur circles for aesthetic */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-3 tracking-tight">
              Welcome Back! <br />Let's Bring Your Dreams to Life
            </h1>
            <p className="text-sm text-gray-text">
              Your vision board awaits! Log in to save and customize your dreams.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5 ml-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="dreamer@example.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-border focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 ml-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-border focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex items-center justify-between pb-2">
              <label className="flex items-center text-sm text-gray-text cursor-pointer group">
                <input type="checkbox" className="mr-2 rounded text-sage focus:ring-sage transition duration-200" />
                <span className="group-hover:text-text-dark transition-colors duration-200">Remember me</span>
              </label>
              <a href="#" className="text-sm text-sage hover:text-sage-hover font-medium transition-colors duration-200">Forgot Password?</a>
            </div>

            {/* Login Button */}
            <button
              type="button"
              className="w-full bg-sage hover:bg-sage-hover text-white font-medium py-3 rounded-xl shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            >
              Log in to your vision
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 mb-6 flex items-center">
            <div className="flex-grow border-t border-gray-border"></div>
            <span className="px-4 text-xs tracking-wider text-gray-text uppercase">or</span>
            <div className="flex-grow border-t border-gray-border"></div>
          </div>

          {/* Social Login */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-border hover:bg-gray-soft text-text-dark font-medium py-3 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-text">
              Don't have an account?{' '}
              <a href="#" className="font-semibold text-text-dark hover:text-sage transition-colors duration-200">
                Sign Up
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;

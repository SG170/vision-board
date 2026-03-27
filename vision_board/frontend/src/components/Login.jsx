import React, { useState } from 'react';
import { Mail, Lock, Sparkles, ArrowRight } from 'lucide-react';

const Login = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 relative overflow-hidden bg-cream font-sans">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blush-dark/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-80 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-beige/60 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-sage/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>

      {/* Main Glassmorphic Container */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row relative z-10 bg-glass/60 backdrop-blur-2xl border border-glass-border rounded-[2.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
        
        {/* Left Side: Motivational / Visual */}
        <div className="w-full md:w-5/12 p-10 md:p-14 flex flex-col justify-between bg-gradient-to-br from-blush/40 to-transparent border-b md:border-b-0 md:border-r border-glass-border">
          <div>
            <div className="flex items-center space-x-2 mb-10 md:mb-12">
              <div className="p-2 bg-white/50 rounded-xl shadow-sm backdrop-blur-md">
                <Sparkles className="w-5 h-5 text-sage" />
              </div>
              <span className="font-serif text-xl font-medium text-text-dark tracking-wide">Visionary</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4 md:mb-6 text-text-dark">
              Curate your <br/>
              <span className="italic text-sage">dream life.</span>
            </h1>
            <p className="text-gray-text text-base md:text-lg max-w-sm leading-relaxed">
              Step into your digital sanctuary. Organize your goals, visualize your future, and make it a reality.
            </p>
          </div>
          
          <div className="hidden md:block mt-16">
            <div className="space-y-4">
              <div className="h-px w-12 bg-gray-text/30"></div>
              <p className="text-sm font-serif italic text-gray-text">
                "The future belongs to those who believe in the beauty of their dreams."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-10 md:p-16 flex flex-col justify-center bg-white/30">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-2xl font-serif font-medium mb-8 text-text-dark">Welcome back</h2>
            
            <form className="space-y-5">
              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-text-dark ml-1" htmlFor="email">Email address</label>
                <div className={`relative transition-all duration-300 ${emailFocus ? 'shadow-md shadow-sage/10 -translate-y-0.5' : 'shadow-none'}`}>
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className={`w-5 h-5 transition-colors duration-300 ${emailFocus ? 'text-sage' : 'text-gray-text/60'}`} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="dreamer@example.com"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-white/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage/40 focus:bg-white/80 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-text-dark ml-1" htmlFor="password">Password</label>
                <div className={`relative transition-all duration-300 ${passFocus ? 'shadow-md shadow-sage/10 -translate-y-0.5' : 'shadow-none'}`}>
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className={`w-5 h-5 transition-colors duration-300 ${passFocus ? 'text-sage' : 'text-gray-text/60'}`} />
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    onFocus={() => setPassFocus(true)}
                    onBlur={() => setPassFocus(false)}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/50 border border-white/60 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sage/40 focus:bg-white/80 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Options */}
              <div className="flex items-center justify-between pt-2 pb-4">
                <label className="flex items-center text-sm text-gray-text cursor-pointer group">
                  <div className="relative flex items-center">
                    <input type="checkbox" className="peer w-4 h-4 text-sage bg-white/50 border-gray-border rounded focus:ring-sage/50" />
                  </div>
                  <span className="ml-2 group-hover:text-text-dark transition-colors duration-200">Remember me</span>
                </label>
                <a href="#" className="text-sm text-sage hover:text-sage-hover font-medium transition-colors duration-200">Reset password</a>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full group relative flex items-center justify-center space-x-2 bg-gradient-to-r from-sage to-[#859c71] hover:from-[#8FA27C] hover:to-[#7a8f67] text-white font-medium py-3.5 rounded-2xl shadow-lg shadow-sage/30 hover:shadow-xl hover:shadow-sage/40 transform hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10">Sign In</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </button>
            </form>

            {/* Social & Sign Up */}
            <div className="mt-8">
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-glass-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-gray-text/70 backdrop-blur-xl">Or continue with</span>
                </div>
              </div>

              <div className="grid gap-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-3 bg-white/50 hover:bg-white/80 border border-white/60 text-text-dark font-medium py-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                      <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                      <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                      <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                      <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                    </g>
                  </svg>
                  <span>Google</span>
                </button>
              </div>

              <div className="mt-8 text-center bg-white/20 p-4 rounded-xl backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors duration-300">
                <p className="text-sm text-gray-text">
                  New to Visionary?{' '}
                  <a href="#" className="font-medium text-sage hover:text-sage-hover transition-all duration-200">
                    Create your sanctuary
                  </a>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

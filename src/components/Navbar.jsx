import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar Component - Scholarly Botanical Theme
 * Sticky header with botanical logo and warm aesthetic
 */
function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 z-50 bg-[#FBF8F3] shadow-lg border-b-2 border-[#E5DFD3]">
      {/* Decorative top border - botanical gradient */}
      <div className="h-1 bg-gradient-to-r from-[#8B6F47] via-[#6B7553] to-[#C4A57B]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center gap-4 group"
          >
            {/* Botanical Book Icon */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#8B6F47] to-[#5C4033] p-3 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-md">
                <svg 
                  className="w-7 h-7 text-[#FBF8F3]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                  />
                </svg>
                {/* Decorative corner */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#6B7553] rounded-full"></div>
              </div>
            </div>
            
            {/* Brand Text */}
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#5C4033] group-hover:text-[#8B6F47] transition-colors duration-200">
                ScholarToday
              </h1>
              <p className="text-xs text-[#8B8378] font-medium tracking-wide">Scholarly Posts Collection</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            {/* API Source Link */}
            <a
              href="https://jsonplaceholder.typicode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-[#8B8378] hover:text-[#5C4033] hover:bg-[#F5E6D3] rounded-lg transition-all duration-200"
              title="API Source"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom decorative pattern */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C4A57B] to-transparent opacity-50"></div>
    </nav>
  );
}

export default Navbar;

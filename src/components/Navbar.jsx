import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-[#FBF8F3] shadow-lg border-b-2 border-[#E5DFD3] w-full">
      <div className="h-1 bg-gradient-to-r from-[#8B6F47] via-[#6B7553] to-[#C4A57B]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center gap-4 group"
            aria-label="Navigate to home page"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-[#8B6F47] to-[#5C4033] p-3 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-md">
                <svg 
                  className="w-7 h-7 text-[#FBF8F3]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                  />
                </svg>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#6B7553] rounded-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-[#5C4033] group-hover:text-[#8B6F47] transition-colors duration-200">
                ScholarToday
              </h1>
              <p className="text-xs text-[#5C5346] font-medium tracking-wide">Scholarly Posts Collection</p>
            </div>
          </Link>
        </div>
      </div>
      
      <div className="h-px bg-gradient-to-r from-transparent via-[#C4A57B] to-transparent opacity-50"></div>
    </nav>
  );
}

export default Navbar;

/**
 * Loading Component - Botanical Theme
 * Displays loading spinner with botanical animation
 * Used while fetching data from API
 */
function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      {/* Botanical Leaf Loading Animation */}
      <div className="relative">
        {/* Outer circle - Earth tone */}
        <div className="w-20 h-20 border-4 border-[#E5DFD3] border-t-[#8B6F47] rounded-full animate-spin"></div>
        
        {/* Middle circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-12 h-12 border-4 border-[#D8E2DC] border-t-[#6B7553] rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>
        
        {/* Center botanical icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
          <svg 
            className="w-7 h-7 text-[#FBF8F3]" 
            fill="none" 
            stroke="#5C4033" 
            viewBox="0 0 24 24"
            strokeWidth="2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
              />
          </svg>
        </div>
      </div>
      
      {/* Loading text - Serif font */}
      <p className="mt-8 text-[#5C4033] font-serif text-lg font-semibold animate-pulse">
        Loading Posts...
      </p>
      
      {/* Bouncing botanical dots */}
      <div className="flex gap-2 mt-4">
        <div className="w-2.5 h-2.5 bg-[#8B6F47] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2.5 h-2.5 bg-[#6B7553] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2.5 h-2.5 bg-[#C4A57B] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      
      {/* Decorative botanical elements */}
      <div className="mt-6 flex gap-3 opacity-30">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#5C4033">
          <circle cx="8" cy="8" r="1.5"/>
          <path d="M8 8L8 2M8 8L8 14M8 8L2 8M8 8L14 8" stroke="#5C4033" strokeWidth="0.5"/>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#6B7553">
          <circle cx="8" cy="8" r="1.5"/>
          <path d="M8 8L8 2M8 8L8 14M8 8L2 8M8 8L14 8" stroke="#6B7553" strokeWidth="0.5"/>
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#C4A57B">
          <circle cx="8" cy="8" r="1.5"/>
          <path d="M8 8L8 2M8 8L8 14M8 8L2 8M8 8L14 8" stroke="#C4A57B" strokeWidth="0.5"/>
        </svg>
      </div>
    </div>
  );
}

export default Loading;

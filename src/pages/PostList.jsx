import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Loading from '../components/Loading';
import { getAllPosts } from '../services/api';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch posts');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFCFA]">
      <div className="relative bg-gradient-to-br from-[#8B6F47] via-[#6B7553] to-[#5C4033] text-[#FBF8F3] overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-10 right-10 w-40 h-40" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
          <svg className="absolute bottom-10 left-10 w-32 h-32" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M50 15 L50 85 M15 50 L85 50" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative text-center">
            <div className="flex flex-col items-center mb-6"> 
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 [text-shadow:_0_0_8px_rgba(255,255,255,4.9)]">
                All Posts
                </h1>
                <p className="text-lg opacity-90">
                Explore {posts.length} scholarly posts from our collection
                </p>
            </div>

            <div className="max-w-2xl mx-auto mt-8 w-full">
                <div className="relative">
                <input
                    type="text"
                    placeholder="Search posts by title or content..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-14 rounded-xl text-[#2C2416] placeholder-[#5C5346] bg-[#FBF8F3] focus:outline-none focus:ring-4 focus:ring-[#C4A57B]/50 transition-all shadow-xl border-2 border-[#E5DFD3]"
                    aria-label="Search posts by title or content"
                />
                <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#8B6F47]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    aria-hidden="true"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                </div>
            </div>
            </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#FBF8F3] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading && <Loading />}

        {error && !loading && (
          <div className="bg-[#FBF8F3] border-2 border-[#C97D60] rounded-xl p-8 text-center shadow-lg" role="alert">
            <div className="text-[#C97D60] mb-4">
              <svg
                className="w-16 h-16 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-serif font-bold mb-2 text-[#5C4033]">Oops! Something went wrong</h3>
              <p className="text-[#8B6F47]">{error}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#8B6F47] hover:bg-[#5C4033] text-[#FBF8F3] font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-8 flex items-center justify-between border-b border-[#E5DFD3] pb-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-[#8B6F47] to-[#6B7553] rounded-full"></div>
                <p className="text-[#5C5346] font-medium">
                  {searchTerm ? (
                    <>
                      Found <strong className="text-[#8B6F47] font-semibold">{filteredPosts.length}</strong> result
                      {filteredPosts.length !== 1 ? 's' : ''} for <span className="italic text-[#5C4033]">"{searchTerm}"</span>
                    </>
                  ) : (
                    <>
                      Showing <strong className="text-[#8B6F47] font-semibold">{posts.length}</strong> scholarly posts
                    </>
                  )}
                </p>
              </div>

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-sm text-[#8B6F47] hover:text-[#5C4033] font-medium flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[#F5E6D3] transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear search
                </button>
              )}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <PostCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-[#FBF8F3] rounded-xl border-2 border-dashed border-[#E5DFD3]">
                <div className="mb-6 inline-block p-6 bg-[#F5E6D3] rounded-full">
                  <svg
                    className="w-16 h-16 text-[#8B6F47]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#5C4033] mb-3">
                  No posts found
                </h3>
                <p className="text-[#8B8378] mb-6 max-w-md mx-auto">
                  We couldn't find any posts matching <span className="italic font-medium">"{searchTerm}"</span>. Try searching with different keywords.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-[#8B6F47] hover:bg-[#5C4033] text-[#FBF8F3] font-semibold px-6 py-3 rounded-lg transition-colors shadow-md"
                >
                  Show all posts
                </button>
              </div>
            )}

            {showScrollTop && filteredPosts.length > 6 && (
              <div className="fixed bottom-8 right-8 z-40">
                <button
                  onClick={scrollToTop}
                  className="bg-gradient-to-br from-[#8B6F47] to-[#5C4033] hover:from-[#5C4033] hover:to-[#8B6F47] text-[#FBF8F3] p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group"
                  aria-label="Scroll to top of page"
                  title="Scroll to top"
                >
                  <svg
                    className="w-6 h-6 group-hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  <div className="absolute inset-0 rounded-full border-2 border-[#C4A57B] opacity-0 group-hover:opacity-100 scale-110 transition-all"></div>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default PostList;

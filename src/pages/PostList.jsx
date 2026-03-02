import { useState, useEffect } from 'react';
import PostCard from '../components/PostCard';
import Loading from '../components/Loading';
import { getAllPosts } from '../services/api';

/**
 * PostList Page - Main page displaying all posts
 * Fetches and displays all posts from JSONPlaceholder API
 */
function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Posts
          </h1>
          <p className="text-lg opacity-90 mb-6">
            Explore {posts.length} posts from JSONPlaceholder API
          </p>

          <div className="max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts by title or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all shadow-lg"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && <Loading />}

        {error && !loading && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 text-center">
            <div className="text-red-600 mb-4">
              <svg
                className="w-16 h-16 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Oops! Something went wrong</h3>
              <p className="text-red-700">{error}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                {searchTerm ? (
                  <>
                    Found <strong className="text-blue-600">{filteredPosts.length}</strong> result
                    {filteredPosts.length !== 1 ? 's' : ''} for "{searchTerm}"
                  </>
                ) : (
                  <>
                    Showing <strong className="text-blue-600">{posts.length}</strong> posts
                  </>
                )}
              </p>

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Clear search
                </button>
              )}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg
                  className="w-24 h-24 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No posts found
                </h3>
                <p className="text-gray-500 mb-4">
                  Try searching with different keywords
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Show all posts
                </button>
              </div>
            )}

            {filteredPosts.length > 6 && (
              <div className="fixed bottom-8 right-8">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  title="Scroll to top"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
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

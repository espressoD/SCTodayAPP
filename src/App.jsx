import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';
import Loading from './components/Loading';
import { getAllPosts } from './services/api';
import './App.css';

/**
 * App Component - PostCard Preview/Test
 * Shows first 6 posts to preview PostCard component
 * This will be replaced with proper routing later
 */
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getAllPosts();
        // Get only first 6 posts for preview
        setPosts(data.slice(0, 6));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Preview Header */}
          <div className="mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-2">🎨 PostCard Component Preview</h2>
            <p className="text-sm opacity-90">
              Testing reusable PostCard component with live data from JSONPlaceholder API
            </p>
            <p className="text-xs mt-2 bg-white/20 inline-block px-3 py-1 rounded">
              ⚠️ This is a test view - Will be replaced with PostList page
            </p>
          </div>

          {/* Loading State */}
          {loading && <Loading />}

          {/* Error State */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong className="font-bold">Error: </strong>
              <span>{error}</span>
            </div>
          )}

          {/* PostCard Grid */}
          {!loading && !error && posts.length > 0 && (
            <>
              <div className="mb-4 text-gray-600">
                <p className="text-sm">
                  Showing <strong className="text-blue-600">{posts.length}</strong> posts (preview)
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Info Footer */}
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-2">✅ Component Test Checklist:</h3>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>✅ PostCard displays title, body preview, and metadata</li>
                  <li>✅ Hover effects working (shadow & color changes)</li>
                  <li>✅ Responsive grid layout (1 col mobile, 2 tablet, 3 desktop)</li>
                  <li>✅ "Read More" button with arrow animation</li>
                  <li>✅ Loading state with spinner animation</li>
                  <li>✅ Data fetched from real API</li>
                </ul>
              </div>
            </>
          )}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;



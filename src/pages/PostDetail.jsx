import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { getPostById} from '../services/api';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostAndUser = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch post data
        const postData = await getPostById(id);
        setPost(postData);

      } catch (err) {
        setError(err.message || 'Failed to fetch post');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPostAndUser();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FDFCFA]">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#FDFCFA] flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-[#FBF8F3] rounded-xl shadow-xl p-8 text-center border-2 border-[#E5DFD3]" role="alert">
          <div className="text-[#C97D60] mb-6">
            <div className="mb-4 inline-block p-5 bg-[#F5E6D3] rounded-full">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#5C4033] mb-3">Post Not Found</h2>
            <p className="text-[#8B6F47] mb-6">{error}</p>
          </div>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => navigate('/')}
              className="bg-[#8B6F47] hover:bg-[#5C4033] text-[#FBF8F3] font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-md"
            >
              ← Back to All Posts
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#E5DFD3] hover:bg-[#C4A57B] text-[#5C4033] font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFA]">
      <div className="relative bg-gradient-to-br from-[#8B6F47] via-[#6B7553] to-[#5C4033] text-[#FBF8F3] overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute top-5 right-10 w-32 h-32" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-2 capitalize leading-tight [text-shadow:_0_0_8px_rgba(255,255,255,4.9)]">
            {post.title}
          </h1>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#FBF8F3] to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-[#FBF8F3] rounded-xl shadow-xl p-8 md:p-12 mb-8 border border-[#E5DFD3] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="paper" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="0.5" fill="#5C4033"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#paper)"/>
            </svg>
          </div>

          <div className="relative">
            <p className="text-[#2C2416] leading-relaxed text-lg md:text-xl font-light" style={{ lineHeight: '2' }}>
              {post.body}
            </p>
          </div>

          <div className="my-8 flex items-center justify-center">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-[#8B6F47] rounded-full"></div>
              <div className="w-2 h-2 bg-[#6B7553] rounded-full"></div>
              <div className="w-2 h-2 bg-[#C4A57B] rounded-full"></div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5DFD3]">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-[#F5E6D3] px-4 py-2 rounded-lg border border-[#E5DFD3]">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className="text-sm text-[#5C5346]">Post ID: <strong className="text-[#5C4033]">{post.id}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-[#F5E6D3] px-4 py-2 rounded-lg border border-[#E5DFD3]">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[#5C5346]">User ID: <strong className="text-[#5C4033]">{post.userId}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-[#F5E6D3] px-4 py-2 rounded-lg border border-[#E5DFD3]">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-sm text-[#5C5346]">Words: <strong className="text-[#5C4033]">{post.body.split(' ').length}</strong></span>
              </div>
              <div className="flex items-center gap-2 bg-[#F5E6D3] px-4 py-2 rounded-lg border border-[#E5DFD3]">
                <svg className="w-5 h-5 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-[#5C5346]">Reading: <strong className="text-[#5C4033]">{Math.ceil(post.body.split(' ').length / 200)} min</strong></span>
              </div>
            </div>
          </div>
        </article>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            to="/"
            className="flex-1 bg-[#E5DFD3] hover:bg-[#C4A57B] text-[#5C4033] font-semibold px-6 py-4 rounded-lg transition-all duration-200 text-center border-2 border-[#E5DFD3] hover:border-[#8B6F47] group"
          >
            <span className="inline-flex items-center gap-2 justify-center">
                Back to List
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </span>
          </Link>
          
          <div className="flex gap-2 items-center">
            {parseInt(id) > 1 && (
              <Link
                to={`/post/${parseInt(id) - 1}`}
                className="flex-1 sm:flex-none bg-gradient-to-r from-[#8B6F47] to-[#6B7553] hover:from-[#5C4033] hover:to-[#8B6F47] !text-[#FBF8F3] font-bold px-6 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl group"
                title="Previous Post"
              >
                <span className="inline-flex items-center gap-2 justify-center">
                    Prev
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="#FBF8F3" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </Link>
            )}
            {parseInt(id) < 100 && (
              <Link
                to={`/post/${parseInt(id) + 1}`}
                className="flex-1 sm:flex-none bg-gradient-to-r from-[#8B6F47] to-[#6B7553] hover:from-[#5C4033] hover:to-[#8B6F47] !text-[#FBF8F3] font-bold px-6 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-xl group"
                title="Next Post"
              >
                <span className="inline-flex items-center gap-2 justify-center">
                  Next
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="#FBF8F3" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;

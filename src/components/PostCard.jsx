import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @param {Object} post 
 */
function PostCard({ post }) {
  const bodyPreview = post.body.length > 150 
    ? `${post.body.substring(0, 150)}...` 
    : post.body;

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden group">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2"></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            Post #{post.id}
          </span>
          <span className="text-xs text-gray-500">
            User ID: {post.userId}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {bodyPreview}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            to={`/post/${post.id}`}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors duration-200 group/link"
          >
            Read More
            <svg 
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <span className="text-xs text-gray-400">
            {Math.ceil(post.body.split(' ').length / 200)} min read
          </span>
        </div>
      </div>
    </article>
  );
}

// PropTypes for type checking
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostCard;

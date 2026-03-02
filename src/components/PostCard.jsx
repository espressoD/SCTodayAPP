import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * PostCard Component
 * @param {Object} post 
 * @param {number} index - Card index for alternating backgrounds
 */
function PostCard({ post, index = 0 }) {
  const bodyPreview = post.body.length > 150 
    ? `${post.body.substring(0, 150)}...` 
    : post.body;

  // Alternate background colors
  const bgColors = [
    'bg-[#FBF8F3]', // Cream
    'bg-[#F5E6D3]', // Beige
    'bg-[#D8E2DC]', // Sage light
  ];
  const bgColor = bgColors[index % bgColors.length];
  const categoryColors = [
    'bg-[#C4A57B] text-[#5C4033]', // Light brown
    'bg-[#B8BDB5] text-[#4A5D4A]', // Sage
    'bg-[#E5DFD3] text-[#8B6F47]', // Beige border
  ];
  const categoryColor = categoryColors[post.userId % categoryColors.length];

  return (
    <article className={`${bgColor} rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5DFD3] overflow-hidden group relative`}>
      <div className="h-1.5 bg-gradient-to-r from-[#8B6F47] via-[#6B7553] to-[#C4A57B]"></div>
      <div className="p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-block ${categoryColor} text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm`}>
            Post #{post.id}
          </span>
          <span className="text-xs text-[#5C5346] font-medium flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            User {post.userId}
          </span>
        </div>

        <h3 className="text-xl font-serif font-semibold text-[#5C4033] mb-3 line-clamp-2 group-hover:text-[#8B6F47] transition-colors duration-200 leading-snug">
          {post.title}
        </h3>

        <p className="text-[#5C5346] text-sm leading-relaxed mb-4 line-clamp-3 font-light">
          {bodyPreview}
        </p>

        <div className="flex items-center justify-between pt-2">
          <Link
            to={`/post/${post.id}`}
            className="inline-flex items-center gap-2 text-[#8B6F47] hover:text-[#5C4033] font-semibold text-sm transition-all duration-200 group/link"
          >
            Read More
            <svg 
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <div className="flex items-center gap-1.5 text-xs text-[#5C5346]">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{Math.ceil(post.body.split(' ').length / 200)} min read</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-[#8B6F47] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </article>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
};

export default PostCard;

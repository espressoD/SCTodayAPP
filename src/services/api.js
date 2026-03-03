const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com';

/**
 * Fetch with timeout to prevent hanging requests
 * @param {string} url - URL to fetch
 * @param {number} timeout - Timeout in milliseconds (default 10000)
 * @returns {Promise<Response>}
 */
const fetchWithTimeout = async (url, timeout = 10000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    if (error.name === 'AbortError') {
      throw new Error('Request timeout. Please check your connection.');
    }
    throw error;
  }
};

/**
 * Fetch all posts from API
 * @returns {Promise<Array>} Array of post objects
 */
export const getAllPosts = async () => {
  try {
    const response = await fetchWithTimeout(`${BASE_URL}/posts`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Error fetching posts:', error);
    }
    throw new Error('Unable to load posts. Please try again later.');
  }
};

/**
 * Fetch a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise<Object>} Post object
 */
export const getPostById = async (id) => {
  try {
    const response = await fetchWithTimeout(`${BASE_URL}/posts/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error(`Error fetching post ${id}:`, error);
    }
    throw new Error('Unable to load post. Please try again later.');
  }
};

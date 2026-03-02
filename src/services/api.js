/**
 * API Service for JSONPlaceholder
 * Base URL: https://jsonplaceholder.typicode.com
 */

const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch all posts from API
 * @returns {Promise<Array>} Array of post objects
 */
export const getAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Fetch a single post by ID
 * @param {number} id - Post ID
 * @returns {Promise<Object>} Post object
 */
export const getPostById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    throw error;
  }
};

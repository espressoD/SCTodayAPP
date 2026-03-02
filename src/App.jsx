import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './pages/PostList';
import './App.css';

/**
 * App Component - PostList Page Test
 * Testing PostList page with Navbar
 * This will be replaced with proper routing later
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <PostList />
      </div>
    </BrowserRouter>
  );
}

export default App;



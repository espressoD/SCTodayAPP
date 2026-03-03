import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




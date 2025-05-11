import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registrationform from './pages/Registrationform';
import Loginform from './pages/Loginform';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboarad from './pages/Dashboarad';
import BlogForm from './components/BlogForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/create-blog"
          element={
            <ProtectedRoute>
              <BlogForm/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute>
              <Dashboarad />
            </ProtectedRoute>
          }
        />
       
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/register" element={<Registrationform />} />
      </Routes>
    </Router>
  );
}

export default App;

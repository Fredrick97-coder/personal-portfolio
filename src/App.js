import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import PageLayout from './pages/PageLayout';
import AuthLayout from './pages/Auth/AuthLayout';

function App() {
  return (
    <Router>
      <div className="h-screen bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <AuthLayout>
                <PageLayout />
              </AuthLayout>
            }
          >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

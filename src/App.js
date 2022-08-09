import { BrowserRouter as Router } from 'react-router-dom';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <Router>
      <div className="h-screen bg-white">
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;

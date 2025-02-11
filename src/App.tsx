import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Entertainment } from './pages/Entertainment';
import { Education } from './pages/Education';
import { Religious } from './pages/Religious';
import { Programming } from './pages/Programming';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/education" element={<Education />} />
          <Route path="/religious" element={<Religious />} />
          <Route path="/programming" element={<Programming />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
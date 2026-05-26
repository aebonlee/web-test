import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Tools from './pages/Tools';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

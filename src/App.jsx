import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Resources from './components/Resources/Resources';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/html" replace />} />
          <Route path="html" element={<Resources category="html" />} />
          <Route path="css" element={<Resources category="css" />} />
          <Route path="javascript" element={<Resources category="javascript" />} />
          <Route path="react" element={<Resources category="react" />} />
          <Route path="sanity" element={<Resources category="sanity and headless cms" />} />
          <Route path="*" element={<Navigate to="/html" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
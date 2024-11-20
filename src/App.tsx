import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { ArticlePage } from './components/Article';
import { Header } from './components/Header';
import { HomePage } from './components/Home';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

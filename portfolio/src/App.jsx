import './App.css'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import PortfolioItems from './components/PortfolioItems';
import Certifications from './components/Certifications';
import HomeContent from './components/HomeContent';
import "./components/css/homecontent.css";
import Article from './components/Article';
import Contact from './components/Contact';
import Redirect404Handler from './Redirect404Handler';
import { BASE_URL } from './Constants';
import TestGenericArticle from './components/markdownUtils/TestGenericArticle';
import EditWorkflow from './components/hidden/EditWorkflow';
import TestPortfolioItems from './components/TestPortfolioItems';
import { useEffect } from 'react';
import { checkAndBustCacheIfNeeded } from './utils/versionCheck';

function App() {
  useEffect(() => {
    checkAndBustCacheIfNeeded();
  }, []);

  return (
    <Router>
      <Redirect404Handler />

      <div style={{ color: '#453c4a', backgroundColor: '#9792fc', minHeight: '100vh' }}>
        <Header />

        <Routes>
          {/* Parent Route for BASE_URL */}
          <Route path={`${BASE_URL}`} element={<Outlet />}>
            <Route path='works-test' element={<TestPortfolioItems/>}/>
            <Route path="test" element={ <TestGenericArticle /> } />
            <Route path="works" element={<PortfolioItems />} />
            <Route path="works/:articleId" element={<Article />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="contact" element={<Contact />} />
            <Route index element={<HomeContent />} /> {/* Default route for BASE_URL */}
            
            {/* workflow edit routes */}
            <Route path='edit-workflow' element={<Outlet/>}>
              <Route index element={<EditWorkflow/>}/>
            </Route>

            {/* fallback */}
            <Route path="*" element={<Navigate to={`${BASE_URL}`} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

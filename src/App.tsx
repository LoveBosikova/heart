import './App.css'
import {  
  Route,
  Routes
  } 
from 'react-router-dom';
import Header from './components/layout/Header/Header';
import MainPage from './components/pages/MainPage/MainPage';
import Navigation from './components/layout/Navigation/Navigation';
import AboutPage from './components/pages/AboutPage/AboutPage';
import PublicPage from './components/pages/PublicPage/PublicPage';
import ProjectsPage from './components/pages/ProjectsPage/projectsPage';

function App() {

  return (
  <>
      <Header />
      <Navigation />
      <Routes>
        <Route index path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/public' element={<PublicPage />} />
        {/*
        <Route path='/blog' element={<BlogPage />}></Route>
        <Route path='/blog/:id' element={<BlogArticlePage />} />
        <Route path='/catalog' element={<CatalogPage />}>
          <Route index element={<Wallpapers />} />
          <Route path=':cid' element={<Category />} />
        </Route>
        <Route path='*' element={<MainPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App

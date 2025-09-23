// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {  
  Route,
  Routes
  } 
from 'react-router-dom';
import Header from './components/layout/Header/Header';

function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
      <Header />
      <Routes>
        {/*
        <Route path='/materials' element={<MaterialsPage />} />
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

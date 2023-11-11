import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Movies from './pages/Movies';
import TV from './pages/TV';
import Celebrity from './pages/Celebrity';
import Header from './Components/Header';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pages/Movies" element={<Movies />} />
          <Route path="/pages/TV" element={<TV />} />
          <Route path="/pages/Celebrity" element={<Celebrity />} />
          <Route path="/pages/LoginPage" element={<LoginPage />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
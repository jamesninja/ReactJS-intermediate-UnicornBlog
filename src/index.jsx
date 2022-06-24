import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
// import ArticleDetails from "./components/ArticleDetails"
import Gallery from './components/Gallery';
import Upload from './components/Upload';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import Posts from './components/Posts';
import Search from "./components/Search"


let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar/>
  {/* <Search/> */}
    <Routes>
        <Route path= "/" element={<App/>}/>
          <Route path= "home" element={<Home/>}/>
          {/* <Route path= "articlesdetails" element={<ArticleDetails/>}/> */}
          <Route path= "upload" element={<Upload/>}/>
          <Route path= "gallery" element={<Gallery/>}/>
          <Route path= "posts" element={<Posts/>}/>
          <Route path= "search" element={<Search/>}/>
          {/* <Route path= "postId" element={<PostId/>}/>  */}
      </Routes>
      {/* <Footer/> */}
  </BrowserRouter>,
);


























// import React from "react";
// import { ReactDOM } from "react";
// import "./index.css";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import Search from './components/Search';

// ReactDOM.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>,
//   document.getElementById("root")
// )



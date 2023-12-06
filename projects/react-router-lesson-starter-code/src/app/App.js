import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import "./App.css";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>  {/* root route */}
  
    
    <Route path="/about" element={ <About /> } />  {/* nested route */}
    <Route path="/sign-up" element={ <SignUp /> } />  {/* nested route */}
    
    
    
    <Route path="/articles/:bookId/:page?">
      <Article />
    </Route>
    
    
    <Route path="/categories" element={ <Categories /> } />
    <Route path="/profile" element={ <Profile /> } />  {/* nested route */}
  </Route>
));

function App() {
  return <RouterProvider router={router} />
}

export default App;

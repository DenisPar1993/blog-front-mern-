import {Layout} from "./components/Layout";
import { Routes,Route } from "react-router-dom";
import {MainPage} from "./pages/MainPage"
import {LoginPage} from "./pages/LoginPage"
import {EditPostPage} from "./pages/EditPostPage"
import {AddPostPage} from "./pages/AddPostPage"
import {PostPage} from "./pages/PostPage"
import {PostsPage} from "./pages/PostsPage"
import {RegisterPage} from "./pages/RegisterPage"
import { ToastContainer } from "react-toastify";
import { getUser } from "./store/slices/AuthSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function App() {
const dispatch=useDispatch()

useEffect(()=>{
dispatch(getUser())
},[dispatch])
  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/:id" element={<PostPage/>}/>
        <Route path="/posts" element={<PostsPage/>}/>
        <Route path="/add" element={<AddPostPage/>}/>
        <Route path="/:id/edit" element={<EditPostPage/>}/>
      </Routes>
      <ToastContainer/>
      
     </Layout>
  );
}

export default App;

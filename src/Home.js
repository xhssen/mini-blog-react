import React from "react";
import useFetch from "./useFetch";
import BlogList from "./Components/BlogList";

const Home = () => {
 const fetchBlogs = useFetch('http://localhost:3001/blogs');
  return (
    <div className="home">
      { (fetchBlogs) ? <BlogList data={fetchBlogs} /> : <h3 style={{textAlign:'center'}}  >Loading Blogs ... </h3>}
      </div>
  );
}
 
export default Home;
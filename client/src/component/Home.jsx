import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-around w-full pb-3 border-b-2 border-black p-5">
      <h1 className="text-4xl font-extrabold">Blogs.</h1>
      <div className="w-6/12 flex items-center justify-evenly">
        <Link to="/create"> Create Post</Link>
        <Link to="/blogs">All Blogs</Link>
      </div>
      <hr />
    </div>
  );
};

export default Home;

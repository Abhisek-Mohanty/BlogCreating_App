import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Blogs = () => {
  let [blog, setBlog] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/blog")
      .then((response) => {
        setBlog(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold leading-7 text-gray-900 ">
            All Posted Blogs
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blog.map((x) => {
            return (
              <div>
                <Link to={`/${x._id}`}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={x.image}
                      title={x._id}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h3>{x.title}</h3>
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

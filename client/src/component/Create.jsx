import React, { useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Create = () => {
  let [title, setTitle] = useState("");
  let [image, setImage] = useState("");
  let [des, setDes] = useState("");

  let titleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };
  let ImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = () => {
      console.log("image error");
    };
  };
  let publish = (e) => {
    e.preventDefault();
    let details = {
      title: title,
      image: image,
      article: des,
    };
    axios
      .post("http://localhost:5000/publish", details)
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
  };
  return (
    <div>
      <form className="mt-20 max-w-5xl absolute left-16 border-solid border-black border-2 p-10">
        <h1 className="text-3xl font-bold">Create a Blog Post Here....</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "75ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            onChange={titleChange}
            value={title}
            required
            label="Choose title"
            variant="standard"
          />
        </Box>
        <br />
        <br />
        <label> Upload Image</label>
        <br />
        <input
          className="w-full"
          type="file"
          required
          accept="image/*"
          onChange={ImageChange}
        />
        <br />
        <br />
        <label> Blog Description</label>
        <br />
        <ReactQuill theme="snow" value={des} onChange={setDes} />
        <br />
        <br />
        <br />
        <hr />
        {/* <input type="text" value={des} onChange={DesChange} /> */}

        <Button onClick={publish} variant="contained" disableElevation>
          Publish
        </Button>
      </form>
      <img
        src="https://source.unsplash.com/1080x1080/?blog"
        className="w-3/12 fixed right-24 top-40 h-2/3"
        alt=""
      />
    </div>
  );
};

export default Create;

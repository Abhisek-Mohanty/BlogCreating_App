import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const One = () => {
  let [data, setData] = useState("");
  let { abc } = useParams("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/${abc}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [abc]);

  return (
    <div>
      <img
        src={data.image}
        alt={data._id}
        className="max-w-xl relative left-64"
      />
      <h1 className="text-5xl mb-5">{data.title}</h1>
      <div className="max-w-l">
        <ReactQuill
          value={data.article}
          readOnly={true}
          theme="bubble"
          className="text-3xl"
        />
      </div>
    </div>
  );
};

export default One;

import React, { useState, useEffect } from "react";
import "./Post.css";

//Services
import { getPost } from "../../server";

//DRF
import { useParams } from "react-router-dom";

const PostById = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    getPost(id).then((data) => {
      setPost(data);
    });
  }, [id]);

  const { title, author, content, img } = post;
  return (
    <div className="containerPost">
      <div className="title__containerPost">
        <h1 className="title__textPost">{title} </h1>
      </div>
      <div className="datas__containerPost">
        <div>
          <img
            className="imgProfilePost"
            src=" https://miro.medium.com/fit/c/96/96/1*gYzstxJPP21JUOIXHOX4Nw.jpeg"
          />
        </div>
        <div>
          <p>{author}</p>
          <p className="date__Post">Aug 22, 2018 · 7 min read</p>
        </div>
      </div>
      <div>
        <img className="imgCardPost" src={img} />
      </div>
      <div className="text__containerPost">
        <p className="paragraphPost">{content}</p>
      </div>
    </div>
  );
};

export default PostById;

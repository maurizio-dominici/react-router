import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  const apiDetailUrl = `http://localhost:3000/posts/${id}`;
  const [postDetail, setPostDetail] = useState([]);
  useEffect(() => {
    axios.get(apiDetailUrl).then((res) => {
      setPostDetail(res.data);
    });
  }, []);

  return (
    <div id="page-detail">
      <div className="container" id="page-detail">
        <h1 className="text-center my-4">{postDetail.title}</h1>
        <div className="d-flex align-items-center flex-column">
          <img
            className="my-4"
            src={"http://localhost:3000" + postDetail.image}
            alt={postDetail.title}
          />
          <p className="mb-4">{postDetail.content}</p>
        </div>
      </div>
    </div>
  );
}

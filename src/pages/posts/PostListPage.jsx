import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostListPage() {
  const apiUrl = "http://localhost:3000";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}/posts`).then((res) => {
      setPosts(res.data.filteredPosts);
    });
  }, []);

  const renderPosts = (post, i) => {
    // console.log(post);

    return (
      <div className="card mb-2" key={i}>
        <img src={"http://localhost:3000" + post.image} alt={post.title} />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <button className="btn btn-primary">
            <Link to={`/posts/${post.id}`}>More</Link>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h1>Posts</h1>
      <div className="row row-cols-4 gap-1">{posts.map(renderPosts)}</div>
    </div>
  );
}

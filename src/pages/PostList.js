import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import PostItem from "../components/PostItem";

function PostList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch ('http://localhost:7777/posts');
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="post-action">
        <button className="post-button" onClick={() => navigate('/posts/new')}>Создать пост</button>
      </div>
      {
        posts.map((post) => <div key={post.id} onClick={() => navigate(`/posts/${post.id}`)}>
          <PostItem post={post} />
        </div>)
      }
    </div>
  );
}

export default PostList;

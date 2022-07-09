import PostItem from "../components/PostItem";
import {useNavigate} from "react-router-dom";
import useFetchPost from "../hooks/useFetchPost";

function PostDetail() {
  const navigate = useNavigate();
  const { post } = useFetchPost();

  const handleDelete = async () => {
    await fetch(`http://localhost:7777/posts/${post.id}`, {
      method: 'DELETE',
    });
    navigate('/');
  };

  return (
    <div className="post-detail">
      <PostItem post={post}/>
      <div className="post-detail_actions">
        <button className="post-button" onClick={() => navigate(`/posts/${post.id}/edit`)}>Изменить</button>
        <button className="post-button post-button__alert" onClick={handleDelete}>Удалить</button>
      </div>
    </div>
  );
}

export default PostDetail;

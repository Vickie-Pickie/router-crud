import PostForm from "../components/PostForm";
import useFetchPost from "../hooks/useFetchPost";
import {useNavigate} from "react-router-dom";

function UpdatePost() {
  const { post, isLoading } = useFetchPost();
  const navigate = useNavigate();
  const handleUpdate = async (text) => {
    await fetch(`http://localhost:7777/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: post.id, content: text }),
    });
    navigate(`/posts/${post.id}`);
  };

  if (isLoading) {
    return <>Загрузка</>
  }

  return (
    <PostForm
      buttonTitle="Сохранить"
      title="Редактировать публикацию"
      onSubmit={handleUpdate}
      content={post.content}
    />
  );
}

export default UpdatePost;

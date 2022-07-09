import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate();
  const onSubmit = async (text) => {
    await fetch('http://localhost:7777/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: 0, content: text }),
    });
    navigate('/');
  };

  return (
    <PostForm buttonTitle={"Опубликовать"} title={"Публикация"} onSubmit={onSubmit}/>
  );
}

export default NewPost;

import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const useFetchPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchPost = async () => {
    setIsLoading(true);
    const response = await fetch (`http://localhost:7777/posts/${id}`);
    const data = await response.json();
    setPost(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return { post, isLoading };
};

export default useFetchPost;

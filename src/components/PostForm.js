import {useState} from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

function PostForm(props) {
  const  { buttonTitle, title, onSubmit, content = '' } = props;
  const [text, setText] = useState(content);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }
    onSubmit(text);
  };

  return (
    <div className="post-form">
      <div className="post-form_title">
        <p>{title}</p>
        <span className="material-icons" onClick={() => navigate('/')}>clear</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="post-img">
            <img />
          </div>
          <div className="input-wrapper">
            <input value={text} className="input-el" onChange={(e) => setText(e.target.value)}/>
          </div>
        </div>
        <div className="button-wrapper">
          <button type="submit" className="post-button">{buttonTitle}</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;

PostForm.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

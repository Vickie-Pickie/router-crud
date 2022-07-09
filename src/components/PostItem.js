import PropTypes from 'prop-types';

function PostItem(props) {
  const { post } = props;
  return (
    <div className="post-item">
      <div className="post-title">
        <div className="post-img">
          <img/>
        </div>
        <div className="post-author">Петя Иванов</div>
      </div>
      <div className="post-content">{post.content}</div>
    </div>
  );
}

export default PostItem;

PostItem.propTypes = {
  post: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    },
  ).isRequired
};

import CommentForm from '../components/CommentForm';
import {connect} from 'react-redux';
import {postCommentRequested} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({author, text}) => dispatch(postCommentRequested({author, text}))
});

const mapStateToProps = undefined;

// If there are no props to create from state, `mapStateToProps` can be
// omitted.
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);

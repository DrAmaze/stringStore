import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WordForm from './wordForm';
import { createWord } from '../actions/wordActions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  createWord: booking => dispatch(createWord(booking)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordForm);

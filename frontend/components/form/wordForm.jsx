import React from 'react';
import { Link, withRouter } from 'react-router-dom';

// Class was utilized so that the component has access to method
// functionality and can act dynamically.
export class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content : '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Ensures state is being updated as the user types into the
  // input field.
  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  // handles action dispatches
  handleSubmit(e) {
    e.preventDefault();
    const word = this.state;
    this.props.createWord({ word })
      .then(this.props.history.push('/words'));
  }

  render() {
    // This variable disables user from clicking submit unless the
    // string meets the database validation criteria of being more than
    // zero characters in length
    const disabled = this.state.content ? '' : 'true';

    return (
      <div>
        <form className='new-word' onSubmit={ this.handleSubmit }>
          <h2>Add New Word</h2>
          <input
            type='text'
            onChange={this.update('content')}
            placeholder='Enter string here'
            className='string' />

          <button
            type='submit'
            disabled={ disabled }
            className='submit-button'>
            Submit
          </button>
        </form>

        <Link to={ `/words` } className='button'>
          Click here to see complete list of strings
        </Link>
      </div>
    );
  }

}

export default withRouter(WordForm);

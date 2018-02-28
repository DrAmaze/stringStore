import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export class WordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content : '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const word = this.state;
    this.props.createWord({ word })
      .then(this.props.history.push('/words'));
  }

  render() {
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
            className='button'>
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

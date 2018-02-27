import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WordForm extends React.Component {
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
    this.props.createWord({ word });
  }

  render() {
    return (
      <form className='new-word' onSubmit={ this.handleSubmit }>
        <h3>Add New Word</h3>
        <label>
          Enter String
          <input
            type='text'
            onChange={this.update('content')}
            placeholder='type' />
        </label>

      </form>
    );
  }

}

export default withRouter(WordForm);

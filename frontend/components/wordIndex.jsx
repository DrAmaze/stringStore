import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import WordIndexItem from './wordIndexItem';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  componentDidMount() {
    this.props.fetchWords();
  }

  render () {
    let { words } = this.props;

    if (this.props.words) {
      words = words.map(word =>
        <WordIndexItem
          fetchWord={ this.props.fetchWord }
          key={ word.id }
          word={ word }
          />
      );
    } else {
      words = [];
    }

    return(
      <div className='words'>
        <section className='words-index'>
          <h1>Complete List of Words</h1>
          <ul>
            { words }
          </ul>
        </section>

        <section className='new-word'>
          <h3>Add New Word</h3>
          <label>
            Enter String
            <input
              type='text'
              onChange={this.update('content')}
              placeholder='type' />
          </label>
        </section>
      </div>
    );
  }

}

export default Word;

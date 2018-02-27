import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import WordIndexItem from './wordIndexItem';
import Spinner from './spinner';

class Word extends React.Component {
  constructor(props) {
    super(props);
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
      words = <Spinner />;
    }

console.log(words)

    return(
      <div className='words'>
        <section className='words-index'>
          <h1>Complete List of Words</h1>
          <ul>
            { words }
          </ul>
        </section>
      </div>
    );
  }

}

export default Word;

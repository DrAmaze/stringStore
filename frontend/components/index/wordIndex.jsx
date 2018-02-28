import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import WordIndexItem from './wordIndexItem';
import Spinner from '../loading/spinner';

export class Word extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchWords();
  }

  render () {
    let { words } = this.props;

    const wordsList = words ? words.map(word =>
            <WordIndexItem
              fetchWord={ this.props.fetchWord }
              key={ word.id }
              word={ word }
            />) : <Spinner />;

    return(
      <div className='words'>
        <section className='words-index'>
          <h2>Complete List of Words</h2>
          <ul>
            { wordsList }
          </ul>
        </section>

        <Link to={ `/new` } className='button'>
          Add a new word
        </Link>
      </div>
    );
  }

}

export default withRouter(Word);

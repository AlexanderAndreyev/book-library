import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BooksList extends React.Component {

  renderBook(books) {
    const result = [];
    for (let i = 0; i < books.length; i++) {
      result.push(<Book key={i}
                        title={books[i].title}
                        author={books[i].author}
                        description={books[i].description}
                        picture={books[i].picture}
                        postDate={books[i].postDate}
                        id={books[i]._id}
                        deleteBook={this.props.deleteBook}
                  />);
    }
    return result;
  }

  render() {
    return (
      <div>
        { this.renderBook(this.props.books) }
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired
}

export default BooksList;

import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author, description, picture, postDate, id, deleteBook }) {
  return (
    <div>
      <h1>{ title }</h1>
      <p>{ author }</p>
      <p>{ description }</p>
      <img src={ picture } />
      <p>{ postDate }</p>
      <button onClick={ () => deleteBook(id) }>Delete the book</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired
}

export default Book;

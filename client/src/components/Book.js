import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

function toggleClass(number) {
  const form = document.getElementsByClassName('update-form')[number];
  if (form.style.display === 'block') {
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
};

function Book({ number, title, author, description, picture, postDate, id, deleteBook, updateBook, upBook }) {
  return (
    <div className="book">
      <div className="book-section">
        <h1 className="title">{ title }</h1>
        <p className="author">{ author }</p>
        <p className="description">{ description }</p>
        <img className="picture" src={ picture } width="150" height="200"/>
        <p className="data">{ postDate.slice(0,10) }</p>
        <button className="delete-btn" onClick={ () => deleteBook(id) }>Delete the book</button>
        <button className="update-btn" onClick={ () => toggleClass(number) }>Update the book</button>
      </div>
      <div className="update-form" hidden>
        <button className="return-btn" onClick={ () => toggleClass(number) }>Return</button>
        <form onSubmit={ () => updateBook(id, number) }>
          <div>
            <p>Please enter a title</p>
            <input className="up-title" onChange={ () => upBook(number) }/>
          </div>
          <div>
            <p>Please enter an author</p>
            <input className="up-author" onChange={ () => upBook(number) } />
          </div>
          <div>
            <p>Please enter a description</p>
            <textarea className="up-description" onChange={ () => upBook(number) } ></textarea>
          </div>
          <div>
            <p>Please enter an url of the picture</p>
            <input className="up-url" onChange={ () => upBook(number) } />
          </div>
          <button type="submit" className="submit-btn">Update a book</button>
        </form>
      </div>
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
  deleteBook: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
  upBook: PropTypes.func.isRequired
}

export default Book;

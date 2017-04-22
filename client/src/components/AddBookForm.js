import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

function AddBookForm({ submit, setGame }) {
  return (
    <div className="save-book">
      <button className="return-btn"><Link to="/games">Return to books</Link></button>
      <form className="add-form" onSubmit={ () => submit() }>
        <div>
          <p>Please enter a title</p>
          <input className="title" onChange={ () => setGame() }/>
        </div>
        <div>
          <p>Please enter an author</p>
          <input className="author" onChange={ () => setGame() } />
        </div>
        <div>
          <p>Please enter a description</p>
          <textarea className="description" onChange={ () => setGame() } ></textarea>
        </div>
        <div>
          <p>Please enter an url of the picture</p>
          <input className="url" onChange={ () => setGame() } />
        </div>
        <button className="submit-btn" type="submit">Add a book</button>
      </form>
    </div>
  );
}

AddBookForm.propTypes = {
  submit: PropTypes.func.isRequired,
  setGame: PropTypes.func.isRequired
}

export default AddBookForm;

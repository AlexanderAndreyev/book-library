import React from 'react';
import PropTypes from 'prop-types';

function AddBookForm({ submit, setGame }) {
  return (
    <form onSubmit={ () => submit() }>
      <div>
        <p>Please enter a title</p>
        <input id="title" onChange={ () => setGame() }/>
      </div>
      <div>
        <p>Please enter an author</p>
        <input id="author" onChange={ () => setGame() } />
      </div>
      <div>
        <p>Please enter a description</p>
        <textarea id="description" onChange={ () => setGame() } ></textarea>
      </div>
      <div>
        <p>Please enter an url of the picture</p>
        <input id="url" onChange={ () => setGame() } />
      </div>
      <button type="submit">Add a book</button>
    </form>
  );
}

AddBookForm.propTypes = {
  submit: PropTypes.func.isRequired,
  setGame: PropTypes.func.isRequired
}

export default AddBookForm;

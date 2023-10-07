import React, {useState} from 'react'

const AddBookForm = ({ addBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

    const newBook = {
        id: Date.now(),
        title,
        author
    }

        addBook(newBook);

        setTitle('')
        setAuthor('');
    }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Book</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  )
}

export default AddBookForm
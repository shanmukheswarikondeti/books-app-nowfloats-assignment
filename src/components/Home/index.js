import './index.css'

import {Link} from 'react-router-dom'

import booksData from '../../jsonfile/books.json'

const Home = () => (
  <div className="book-home-page-bg-container">
    <h1 className="book-home-page-tittle">Latest Books</h1>
    <ul className="book-home-page-books-list">
      {booksData.books.map(book => (
        <li key={book.id} className="home-page-book-item">
          <Link
            className="home-page-book-item-link"
            to={`/book-view/${book.id}`}
          >
            <p className="home-page-book-item-tittle">{book.title}</p>
            <p className="home-page-book-item-author">~ By {book.author}</p>
          </Link>
        </li>
      ))}
    </ul>
    <div className="home-page-button-container">
      <Link to="/add-new-book">
        <button className="home-page-add-button" type="button">
          AddBook
        </button>
      </Link>
    </div>
  </div>
)

export default Home

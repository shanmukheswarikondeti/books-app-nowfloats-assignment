import './index.css'

import {Link} from 'react-router-dom'

const BookView = () => (
  <div className="book-view-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="book-not-found"
      className="book-view-not-found-img"
    />
    <p className="books-view-page-msg">Page is under Construction</p>
    <p className="books-view-page-msg">
      Visit Home ~ <Link to="/">Click Here</Link>
    </p>
  </div>
)

export default BookView

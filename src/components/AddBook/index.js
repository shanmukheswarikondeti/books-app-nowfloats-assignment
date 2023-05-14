import {Component} from 'react'
import './index.css'

import {Navigate} from 'react-router-dom'

import booksData from '../../jsonfile/books.json'

class AddBook extends Component {
  state = {
    bookName: '',
    authorName: '',
    isBookEmpty: false,
    isAuthorEmpty: false,
    isSubmited: false,
  }

  onChangeBookName = event => {
    this.setState({bookName: event.target.value})
  }

  onChangeAuthorName = event => {
    this.setState({authorName: event.target.value})
  }

  onBlurBookName = event => {
    if (event.target.value === '') {
      this.setState({isBookEmpty: true})
    } else {
      this.setState({isBookEmpty: false})
    }
  }

  onBlurAuthorName = event => {
    if (event.target.value === '') {
      this.setState({isAuthorEmpty: true})
    } else {
      this.setState({isAuthorEmpty: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {bookName, authorName} = this.state
    if (bookName === '' && authorName === '') {
      this.setState({isBookEmpty: true, isAuthorEmpty: true})
      alert('Enter input feilds')
    } else if (bookName === '') {
      this.setState({isBookEmpty: true})
      alert('Enter Bookname')
    } else if (authorName === '') {
      this.setState({isAuthorEmpty: true})
      alert('Enter Authorname')
    } else {
      const newBookObj = {
        id: booksData.books.length + 1,
        title: bookName,
        author: authorName,
      }
      booksData.books.push(newBookObj)
      this.setState({isSubmited: true})
    }
  }

  render() {
    const {
      bookName,
      authorName,
      isBookEmpty,
      isAuthorEmpty,
      isSubmited,
    } = this.state
    if (isSubmited) {
      return <Navigate to="/" />
    }
    return (
      <div className="add-book-form-container">
        <form onSubmit={this.onSubmitForm} className="add-book-form-card">
          <h1 className="add-book-page-tittle">Add New Book</h1>
          <div className="add-book-page-input-container">
            <label htmlFor="book" className="add-book-input-label">
              Book Name
            </label>
            <input
              type="text"
              className="add-book-input-feild"
              placeholder="Enter book name"
              id="book"
              value={bookName}
              onChange={this.onChangeBookName}
              onBlur={this.onBlurBookName}
            />
            {isBookEmpty && <p className="add-book-input-err-msg">*Required</p>}
          </div>
          <div className="add-book-page-input-container">
            <label htmlFor="author" className="add-book-input-label">
              Author Name
            </label>
            <input
              type="text"
              className="add-book-input-feild"
              placeholder="Author book name"
              id="author"
              value={authorName}
              onChange={this.onChangeAuthorName}
              onBlur={this.onBlurAuthorName}
            />
            {isAuthorEmpty && (
              <p className="add-book-input-err-msg">*Required</p>
            )}
          </div>
          <div className="add-book-page-button-card">
            <button className="add-book-page-button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddBook

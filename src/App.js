import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import BookView from './components/BookView'
import AddBook from './components/AddBook'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/add-new-book" element={<AddBook />} />
      <Route exact path="/book-view/:id" element={<BookView />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App

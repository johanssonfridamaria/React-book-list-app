import './App.css';
import React, {useState} from 'react';
import BookList from './components/books/BookList';
import Navbar from './components/navigation/Navbar';

function App() {

 const [books] = useState([
   {id: 1, title: 'The note book'},
   {id: 2, title: 'The second book'},
   {id: 3, title: 'The third book'},
   {id: 4, title: 'The fourth book'},
   {id: 5, title: 'The fifth book'},
 ])


  return (
    <div>
      <Navbar />
      <BookList books={books}/>
    </div>
  );
}

export default App;

// src/components/BookList.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Book {
  id: string;
  Title: string;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Link to={`/details/${book.id}`}>{book.Title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BookList;

// src/components/BookDetails.tsx
import React from 'react';

interface BookDetailsProps {
    Title: string;
    Year: number;
    Publisher: string;
    ISBN: string;
    Pages: number;
    Notes: string[];
  }
  

  const BookDetails: React.FC<BookDetailsProps> = ({ Title, Year, Publisher, ISBN, Pages, Notes }) => {
    return (
      <div className="book-details">
        <h2>{Title}</h2>
        <p><strong>Year:</strong> {Year}</p>
        <p><strong>Publisher:</strong> {Publisher}</p>
        <p><strong>ISBN:</strong> {ISBN}</p>
        <p><strong>Pages:</strong> {Pages}</p>
        <div>
          <h3>Notes:</h3>
          <ul>
            {Notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default BookDetails;

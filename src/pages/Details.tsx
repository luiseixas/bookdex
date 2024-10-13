// src/pages/Details.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookDetails } from '../services/api';
import BookDetails from '../components/BookDetails';

interface Book {
    Title: string;
    Year: number;
    Publisher: string;
    ISBN: string;
    Pages: number;
    Notes: string[];
}

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const data = await getBookDetails(id);
                setBook(data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBookDetails();
    }, [id]);

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div>
            {book ? (
                <>
                    <BookDetails
                        Title={book.Title}
                        Year={book.Year}
                        Publisher={book.Publisher}
                        ISBN={book.ISBN}
                        Pages={book.Pages}
                        Notes={book.Notes}
                    />
                    <button className="back-button" onClick={handleBackClick}>Voltar</button>
                </>

            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Details;

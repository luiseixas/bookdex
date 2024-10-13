// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/api';
import BookList from '../components/BookList';

interface Book {
  id: string;
  Title: string;
}

const Home: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Função para buscar os livros
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await getBooks(); // Chama a função para obter os livros
        setBooks(data);
      } catch (error) {
        setError('Não foi possível carregar os livros.'); // Define a mensagem de erro
      } finally {
        setLoading(false);
      }
    };

    fetchBooks(); // Executa a função de busca
  }, []);

  return (
    <div>
      <h1>BookDéx</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default Home;


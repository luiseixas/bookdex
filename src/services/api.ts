import axios from 'axios';

const api = axios.create({
    baseURL: 'https://stephen-king-api.onrender.com/api', // URL base da API
});

// Função para obter a lista de livros
export const getBooks = async () => {
    try {
        const response = await api.get('/books'); // Faz a requisição GET para o endpoint /books
        return response.data.data; // Retorna apenas os dados relevantes do campo 'data'
    } catch (error) {
        console.error('Erro ao obter livros:', error);
        throw error; // Lança o erro para ser tratado no componente
    }
};

export const getBookDetails = async (id: any) => {
    const response = await api.get(`/book/${id}`);
    return response.data.data;
};


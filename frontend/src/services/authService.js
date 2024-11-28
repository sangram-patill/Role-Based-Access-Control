import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    localStorage.setItem('token', response.data.token); // Save token in localStorage
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
};

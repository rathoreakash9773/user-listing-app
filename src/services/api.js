import axios from 'axios';

const API_URL = 'http://localhost:3001/api/users';

export const addUser = async (userData) => {
    try {
        const response = await axios.post(API_URL, userData);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export const fetchUsers = async (page = 1, limit= 10) => {
    try {
        const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
        return {
            users: response.data.users || response.data,
            totalPages: response.data.totalPages || 1
        };
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    console.log('Deleting user with ID:', userId);
    try {
        await axios.delete(`${API_URL}/${userId}`);
        console.log(`DELETE request sent to: ${API_URL}/${userId}`);
        return true;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};

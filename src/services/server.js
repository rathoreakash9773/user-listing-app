import axios from 'axios';
import { api_url } from '../utils/constant';

export const addUser = async (userData) => {
    try {
        const response = await axios.post(api_url, userData);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

export const fetchUsers = async (page, limit = 8) => {
    try {
      const response = await axios.get(`${api_url}?page=${page}&limit=${limit}`);
      return {
        users: response.data.data || [],  
        totalPages: response.data.totalPages || 1,
        totalUsers: response.data.totalUsers || 0,
        currentPage: response.data.page || page,
        limit: response.data.limit || limit
      };
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };  

export const deleteUser = async (userId) => {
    console.log('Deleting user with ID:', userId);
    try {
        await axios.delete(`${api_url}/${userId}`);
        console.log(`DELETE request sent to: ${api_url}/${userId}`);
        return true;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};
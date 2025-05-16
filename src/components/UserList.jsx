import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import Pagination from './Pagination';
import PageHeader from './PageHeader';
import Sidebar from './Sidebar';
import MainContent from './MainContent'; 
import { fetchUsers, deleteUser } from '../services/server';

const LayoutWrapper = styled.div`
  display: flex;
`;

const UserListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  grid-template-rows: repeat(2, 1fr);
  gap: 10px; 
  padding: 18px;
  justify-content: center; 
  align-items: start; 
`;

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedData = await fetchUsers(currentPage, 8);
  
        if (!fetchedData || !Array.isArray(fetchedData.users)) {
          console.error('Invalid response structure:', fetchedData);
          return;
        }
  
        setUsers(fetchedData.users);
        setTotalPages(fetchedData.totalPages || 1);
      } catch (error) {
        console.error('Failed to load users:', error);
      }
    };
  
    loadUsers();
  }, [currentPage]);
  
  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      const fetchedData = await fetchUsers(currentPage, 8);
  
      if (!fetchedData || !Array.isArray(fetchedData.users)) {
        console.error('Invalid response structure:', fetchedData);
        return;
      }
  
      if (fetchedData.users.length === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1); 
      } else {
        setUsers(fetchedData.users);
        setTotalPages(fetchedData.totalPages || 1);
      }
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Sidebar />
      <PageHeader />
      <LayoutWrapper>
        <MainContent>
        <UserListGrid>
          {users.map((user, index) => (
            <UserCard key={user.id || index} user={user} onDelete={handleDelete} />))}
        </UserListGrid>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}
          />
        </MainContent>
      </LayoutWrapper>
    </>
  );
};

export default UserList;

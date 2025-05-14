import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import Pagination from './Pagination';
import PageHeader from './PageHeader';
import Sidebar from './Sidebar';
import MainContent from './MainContent'; 
import { fetchUsers, deleteUser } from '../services/api';

const LayoutWrapper = styled.div`
  display: flex;
`;

const UserListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 19px; 
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
        const fetchedData = await fetchUsers(1);

        if (!fetchedData || !fetchedData.users || !fetchedData.users.data) {
          console.error('Invalid response structure:', fetchedData);
          return;
        }

        const fetchedUsers = Array.isArray(fetchedData.users.data) ? fetchedData.users.data : [];

        const usersPerPage = 8;
        const calculatedTotalPages = Math.ceil(fetchedUsers.length / usersPerPage);
        setTotalPages(calculatedTotalPages);

        const startIndex = (currentPage - 1) * usersPerPage;
        const endIndex = startIndex + usersPerPage;
        const currentPageUsers = fetchedUsers.slice(startIndex, endIndex);

        setUsers(currentPageUsers);
      } catch (error) {
        console.error('Failed to load users:', error);
      }
    };

    loadUsers();
  }, [currentPage]);
  

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      const fetchedData = await fetchUsers(currentPage);
  
      if (!fetchedData || !fetchedData.users || !fetchedData.users.data) {
        console.error('Invalid response structure:', fetchedData);
        return;
      }
  
      const fetchedUsers = Array.isArray(fetchedData.users.data) ? fetchedData.users.data : [];
      const usersPerPage = 8;
      const startIndex = (currentPage - 1) * usersPerPage;
      const endIndex = startIndex + usersPerPage;
      const currentPageUsers = fetchedUsers.slice(startIndex, endIndex);
  
      setUsers(currentPageUsers);
  
      // Update total pages in case the number of users has changed
      const calculatedTotalPages = Math.ceil(fetchedUsers.length / usersPerPage);
      setTotalPages(calculatedTotalPages);
  
      // Adjust the page if the current page becomes empty
      if (currentPageUsers.length === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error("Delete failed:", error);
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

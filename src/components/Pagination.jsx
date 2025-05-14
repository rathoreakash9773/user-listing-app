import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  position: fixed;
  bottom: 8px;
  left: 58%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  z-index: 1000; 
`;

const PageButton = styled.button`
  padding: 10px 14px;
  margin: 0 2px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: ${({ $active }) => ($active ? '#561FE7' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  cursor: pointer;
  outline: none;
  transition: background 0.2s;
  &:hover {
    background-color: ${({ $active }) => ($active ? '#5b21b6' : '#f0f0f0')};
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

const UserRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const UserCard = styled.div`
  flex: 1;
  margin: 0 8px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Pagination = ({ currentPage, totalPages, onPageChange, users = [] }) => {
    const itemsPerPage = 8; 
    const itemsPerRow = 4; 

    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

   
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentUsers = Array.isArray(users) ? users.slice(startIndex, startIndex + itemsPerPage) : [];

    const rows = [];
    for (let i = 0; i < currentUsers.length; i += itemsPerRow) {
        rows.push(currentUsers.slice(i, i + itemsPerRow));
    }

    return (
        <div>
            {rows.map((row, rowIndex) => (
                <UserRow key={rowIndex}>
                    {row.map((user, userIndex) => (
                        <UserCard key={userIndex}>
                            <img src={user.image} alt={user.name} style={{ width: '100%', borderRadius: '8px' }} />
                            <h4>{user.name}</h4>
                            <p>{user.email}</p>
                        </UserCard>
                    ))}
                </UserRow>
            ))}
            <PaginationContainer>
                <PageButton onClick={handlePrevious} disabled={currentPage === 1}> &#8249; </PageButton>
                {Array.from({ length: totalPages }, (_, i) => (
                    <PageButton
                        key={i + 1}
                        $active={i + 1 === currentPage}
                        onClick={() => onPageChange(i + 1)}
                    >
                        {i + 1}
                    </PageButton>
                ))}
                <PageButton onClick={handleNext} disabled={currentPage === totalPages}> &#8250; </PageButton>
            </PaginationContainer>
        </div>
    );
};
export default Pagination;
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  position: relative;
`;

const PageButton = styled.button`
  position: relative;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: ${({ $active }) => ($active ? '#561FE7' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  cursor: pointer;
  outline: none;
  transition: background 0.2s;
  &:hover { background-color: ${({ $active }) => ($active ? '#5b21b6' : '#f0f0f0')};}
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

const Pagination = ({ currentPage, totalPages, onPageChange, isNextPageEmpty }) => {
    const maxVisiblePages = 3;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages /2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    }

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(
            <PageButton key={i} $active={i === currentPage} onClick={() => onPageChange(i)} > {i} </PageButton>  );
    }
    
    return (
        <PaginationContainer>
            <PageButton onClick={handlePrevious} disabled={currentPage === 1}> &#8249; </PageButton>
            {pages}
            <PageButton 
                onClick={handleNext} disabled={currentPage === totalPages || (currentPage === 1 && isNextPageEmpty)} > &#8250;</PageButton>
        </PaginationContainer>
    );
};
export default Pagination;



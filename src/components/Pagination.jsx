import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
`;

const PageButton = styled.button`
  position: relative;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: ${({ $active }) => ($active ? '#5b21b6' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  cursor: pointer;
  outline: none;
  transition: background 0.2s;
  &:hover { background-color: ${({ $active }) => ($active ? '#5b21b6' : '#f0f0f0')};}
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

// handle current page and total pages
const Pagination = ({ currentPage, totalPages, onPageChange, isNextPageEmpty }) => {
    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    // Generate page buttons
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <PageButton
                key={i}
                $active={i === currentPage}
                onClick={() => onPageChange(i)}
            >
                {i}
            </PageButton>
        );
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

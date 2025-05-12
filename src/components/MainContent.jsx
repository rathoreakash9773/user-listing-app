// components/MainContent.jsx
import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  position: relative;
  margin-left: 220px;  
  margin-top: 60px;    
  width: calc(100vw - 80px); 
  min-height: calc(100vh - 80px); 
  height: 923px;
  padding: 32px;
  background-color: #ffffff;
  overflow: auto;
  box-shadow: 0 18px 4px rgba(0, 0, 0, 0.1);

`;

const PageTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-family: 'Outfit', sans-serif;
  font-size: 30px;
  margin-bottom: 30px;
  margin-top: -10px;
  position: relative;
  color: #000000;
  background-color: #ffffff;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 3px 0;
  position: relative;
  width: 97%;
  max-width: 100vw; 
  height: 48px;
  margin-top: 20px;
  border-radius: 16px;
  border: 1px solid #ccc;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

const SearchInput = styled.input`
  width: 100px;
  flex: 1;
  padding: 14px 16px 14px 40px; 
  min-width: 200px;
  font-size: 15px;
  border: 1px solid #ccc;
  font-weight: light;
  font-family: 'opensans', sans-serif;
  outline: none; 
  &:focus {
    border-color: #aaa; 
  }
`;

const SearchButton = styled.button`
  padding: 14px 18px;
  font-size: 14px;
  font-family: 'opensans', sans-serif;
  border: 1px solid #ccc;
  border-left: none;
  background-color: #F6F6F6;
  color: black;
  width: 100px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #D0D5DD;
  }
`;

const Icon = styled.img`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 20px;
  pointer-events: none;
`;

const MainContent = ({ children }) => (
  <Wrapper>
      <PageTitle>Our Team</PageTitle>
      <SearchContainer>
          <SearchInput type="text" id="searchInput" placeholder="Search by Name, or Email id" />
          <Icon src ="./svg&images/Icon.svg" alt="search" />
          <SearchButton>Search</SearchButton>
      </SearchContainer>
      {children}
  </Wrapper>
);

export default MainContent;
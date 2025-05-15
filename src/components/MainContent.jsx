import React from "react";
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Outfit', sans-serif;
    background-color: #f4f4f4;
    color: #333;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    margin: 0;
  }

  input, button {
    font-family: 'opensans', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Wrapper = styled.main`
  position: relative;
  margin-left: 220px;  
  margin-top: 60px;    
  width: calc(100vw - 80px); 
  min-height: calc(100vh - 60px); 
  template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 32px;
  background-color: #ffffff;
  overflow: auto;
  box-shadow: 0 18px 4px rgba(0, 0, 0, 0.1);
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  margin-top: 10px;
  color: #000000;
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
  outline: none; 
  &:focus {
    border-color: #aaa; 
  }
`;

const SearchButton = styled.button`
  padding: 14px 18px;
  font-size: 14px;
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
  <>
    <GlobalStyle />
    <Wrapper>
      <PageTitle>Our Team</PageTitle>
      <SearchContainer>
        <SearchInput type="text" id="searchInput" placeholder="Search by Name, or Email id" />
        <Icon src="./icons/Icon.svg" alt="search" />
        <SearchButton>Search</SearchButton>
      </SearchContainer>
      {children}
    </Wrapper>
  </>
);

export default MainContent;
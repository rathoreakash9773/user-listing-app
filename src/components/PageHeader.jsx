// components/PageHeader.jsx
import React from "react";
import styled from "styled-components";

const TopHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 80px;
  padding: 0 32px;
  background-color: white;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
`;

const LogoImg = styled.img`
  height: 60px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.span`
  font-weight: 500;
  font-family: 'opensans', sans-serif;
  font-size: 14px;
`;

const Arrow = styled.img`
  font-size: 0.8rem;
  color: #555;
`;

const PageHeader = () => (
  <TopHeader>
    <div>
      <LogoImg src="./svg&images/uolo-logo.jpeg" alt="Uolo Logo" />
    </div>
    <ProfileSection>
      <ProfileImg src="./svg&images/Mask_Group.svg" alt="User" />
      <ProfileName>Akash</ProfileName>
      <Arrow src="./svg&images/chevron-down.svg" alt="mask" />
    </ProfileSection>
  </TopHeader>
);

export default PageHeader;

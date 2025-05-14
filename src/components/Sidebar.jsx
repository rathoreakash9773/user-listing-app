import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.aside`
  width: 230px;
  position: fixed;
  height: 100vh;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  margin-top: -18px;
  background-color: #ffffff;
  padding-top: 2rem;
  padding-left: -1rem;
  border-right: 1px solid #e0e0e0;
  box-shadow: 0 8px 4px rgba(0, 0, 0, 0.1);
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  font-size: 14px;
  font-family: 'opensans', sans-serif;
  gap: 10px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: ${(props) => (props.$active ? '#561FE7' : '#555')};
  font-weight: ${(props) => (props.$active ? 'bold' : '500')};
  background-color: ${(props) => (props.$active ? '#ebe6ff' : 'transparent')};
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #eee;
  }
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

const Sidebar = () => (
  <SidebarWrapper>
    <SidebarItem $active>
      <Icon src="./icons/group.svg" alt="Team Icon" />
      <span>All Team Member</span>
    </SidebarItem>
    <SidebarItem>
      <Icon src="./icons/person_add.svg" alt="Create Icon" />
      <span>Create Profile</span>
    </SidebarItem>
  </SidebarWrapper>
);

export default Sidebar;

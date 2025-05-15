import React from 'react';
import styled from 'styled-components';

// Styled components replacing external CSS
const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 12px;
  text-align: center;
  height: 330px;
  position: relative;
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(196, 195, 195, 0.22);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  margin-bottom: -0px;
  margin-top: -5px;
  margin-right: 10px;
`;

const Name = styled.h3`
  font-family: 'outfit', sans-serif;
  font-size: 18px;
  color: #333;
  font-weight: bold;
  margin-bottom: -4px; 
  margin-top: 6px;
  position: relative;
`;

const Email = styled.p`
  margin: 0 0 15px;
  margin-bottom: 8px;
  font-weight: light;
  font-family: 'outfit', sans-serif;
  font-size: 16px;
  color:rgb(86, 86, 88);
  position: relative;
`;

const Avatar = styled.img`
  width: 113%;
  height: 160%;
  object-fit: cover;
  margin-top: -16px;
  background-image: url(${props => props.src});
  border-top-left-radius: 12px;
  border-top-right-radius: 14px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 10px;
  margin-top: -5px;
  background: none;
  border: none;
  background-color: transparent;
  color: rgb(249, 4, 4);
  font-size: 20px;
  cursor: pointer;
  opacity: 0; 
  display: flex;
  transition: opacity 0.2s ease;
  &:hover {
    color: rgb(243, 14, 14);
    opacity: 1;
  }

  ${Card}:hover & {
    opacity: 1;
  }
`;

const UserCard = ({ user, onDelete }) => {
  return (
    <Card>
      <CloseButton onClick={() => onDelete(user?.id)}>&times;</CloseButton>
      <Avatar src={user.image} alt={user.name} />
      <Name>{user.name}</Name>
      <Email>{user.email}</Email>
    </Card>
  );
};

export default UserCard;

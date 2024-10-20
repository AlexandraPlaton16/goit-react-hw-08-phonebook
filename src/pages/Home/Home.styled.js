import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;
    z-index: 0;
  }

  z-index: 1;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  text-align: center;
  color: white;
  transition: text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1; /* Ensure the title is above the overlay */

  &:hover,
  &:focus {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
  }
`;

export const Link = styled(NavLink)`
  margin-top: 25px;
  padding: 10px;
  border: 0px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #ff4500;
  box-shadow: gray;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    text-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1; /* Ensure the button is above the overlay */

  &:hover,
  &:focus {
    opacity: 0.8;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4);
  }
`;

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #f5f1da;
  font-weight: 500;
  transition: text-shadow 0.3s ease-in-out; /* Smooth transition for the glow effect */

  &.active {
    background-color: oranged;
  }

  &:hover {
    text-shadow: 0 0 8px #fff, 0 0 12px #de7119, 0 0 16px #de7119; /* Glow effect */
  }
`;

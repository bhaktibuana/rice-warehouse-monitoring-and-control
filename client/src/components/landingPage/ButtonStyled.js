import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#b36d34' : 'rgb(40, 40, 40)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 43px' : '12px 25px')};
  color: ${({ dark }) => (dark ? 'rgb(40, 40, 40)' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#b36d34')};
  }
`;
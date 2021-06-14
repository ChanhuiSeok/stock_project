import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  cursor: pointer;
`;

export const HeaderButton = styled(Button)`
  background-color: transparent;
  padding: 0.4rem;
  margin-top: 20px;
  margin-right: 10px;
  &:hover {
    border-bottom: 3px solid rgba(194, 194, 194, 0.4);
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlockBox = styled.div`
  display: block;
`;

export const InlineBlockBox = styled.div`
  display: inline-block;
`;

import {FunctionComponent} from 'react';
import styled from 'styled-components';

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Button = styled.button`
  background: ${({theme}) => theme.background};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

export const Toggler: FunctionComponent<Props> = (props) => {
  const {theme, toggleTheme} = props;
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};

export default Toggler;

import {FunctionComponent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Button = styled.button`
  background-color: transparent;
  color: ${({theme}) => theme.text};
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.6rem;
`;

export const ThemeButton: FunctionComponent<Props> = (props) => {
  const {theme, toggleTheme} = props;
  return (
    <Button onClick={toggleTheme}>
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </Button>
  );
};

export default ThemeButton;

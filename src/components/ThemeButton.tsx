import {FunctionComponent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb as bulbOn} from '@fortawesome/free-solid-svg-icons';
import {faLightbulb as bulbOff} from '@fortawesome/free-regular-svg-icons';
import {ButtonProps} from './props/ButtonProps';
import {HeaderButton} from '../common/styles/elements';
import styled from 'styled-components';

interface Props {
  theme: string;
  float: string;
  toggleTheme: () => void;
}

const Button = styled(HeaderButton)<ButtonProps>`
  color: ${({theme}) => theme.text};
  font-size: ${(props) => props.fontSize};
  float: ${(props) => props.float};
`;

export const ThemeButton: FunctionComponent<Props> = (props) => {
  const {theme, float, toggleTheme} = props;
  return (
    <>
      <Button onClick={toggleTheme} float={float} fontSize={'23px'}>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={bulbOn} />
        ) : (
          <FontAwesomeIcon icon={bulbOff} />
        )}
      </Button>
    </>
  );
};

export default ThemeButton;

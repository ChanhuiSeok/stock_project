import {FunctionComponent} from 'react';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft as faBack} from '@fortawesome/free-solid-svg-icons';
import {ButtonProps} from './props/ButtonProps';
import {HeaderButton} from '../common/styles/elements';
import styled from 'styled-components';

interface Props {
  float: string;
}

const Button = styled(HeaderButton)<ButtonProps>`
  color: ${({theme}) => theme.text};
  font-size: ${(props) => props.fontSize};
  float: ${(props) => props.float};
`;

export const BackButton: FunctionComponent<Props> = (props) => {
  const {float} = props;
  const history = useHistory();
  const onClick = () => history.goBack(); // 뒤로가기 버튼

  return (
    <>
      <Button onClick={onClick} float={float} fontSize={'23px'}>
        <FontAwesomeIcon icon={faBack} />
      </Button>
    </>
  );
};

export default BackButton;

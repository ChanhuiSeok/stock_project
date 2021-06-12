import {FunctionComponent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0.5em 0 1em 0;
  text-align: center;
  bottom: 0;
  color: #7a7a7a;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 11px;
  }
`;

/** 처음 진입하는 홈페이지 */
const Footer: FunctionComponent = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faGithub} />
      <a href="https://github.com/chanhuiseok/"> ChanhuiSeok</a> /{' '}
      <FontAwesomeIcon icon={faEnvelope} />
      <a href="mailto:chanhuicom@gmail.com"> gmail</a>
    </Wrapper>
  );
};

export default Footer;

import {FunctionComponent} from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {Button, FlexBox} from '../common/styles/elements';

const Wrapper = styled(FlexBox)`
  min-height: 100vh;
  animation: fadein 0.5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Content = styled.div`
  padding: 3rem;
  font-weight: 600;
  text-align: center;
`;

const Logo = styled.p`
  font-size: 60px;
  margin: 0.3em;
`;

const Title = styled.p`
  font-size: 40px;
`;

const SubTitle = styled.p`
  margin-top: 1rem;
  font-size: 20px;
  color: gray;
`;

const EntryButton = styled(Button)`
  background: #1479cd;
  color: white;
  border-radius: 10px;
  padding: 0.5em;
  font-size: 20px;
  margin: 2em;

  &:hover {
    background: #103985;
    transition: all ease 0.4s 0s;
  }
`;

/** 처음 진입하는 홈페이지 */
const Home: FunctionComponent = () => {
  const history = useHistory();
  const onClick = () => history.push('/main');

  return (
    <Wrapper>
      <Content>
        <Logo>📈</Logo>
        <Title>주식 정보를 한눈에!</Title>
        <SubTitle>코스피, 코스닥 관련 정보를 모두 확인해 보세요</SubTitle>
        <EntryButton onClick={onClick}>입장하기</EntryButton>
      </Content>
    </Wrapper>
  );
};

export default Home;

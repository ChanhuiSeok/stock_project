import {useState} from 'react';
import styled from 'styled-components';

/** 처음 진입하는 홈페이지 */
const Home = () => {
  const [names, setNames] = useState(null);

  const Title = styled.div``;

  return <div>테스트입니다.</div>;
};

export default Home;

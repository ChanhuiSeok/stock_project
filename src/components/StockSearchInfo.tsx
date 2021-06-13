import React from 'react';
import {BlockBox} from '../common/styles/elements';
import styled from 'styled-components';

const Wrapper = styled(BlockBox)`
  width: 95%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;

const StockSearchInfo = () => {
  return <Wrapper>회사명 검색</Wrapper>;
};

export default StockSearchInfo;

import React from 'react';
import styled from 'styled-components';
import {BlockBox} from '../common/styles/elements';
import StockRank from './StockRank';
import Loading from './Loading';

const Wrapper = styled(BlockBox)`
  width: 95%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;

const StockContent = () => {
  return (
    <Wrapper>
      <StockRank />
      <Loading />
    </Wrapper>
  );
};

export default StockContent;

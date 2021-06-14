import React, {FunctionComponent} from 'react';
import styled from 'styled-components';
import {BlockBox} from '../common/styles/elements';
import StockRank from './StockRank';
import StockOverview from './StockOverview';
import Loading from './Loading';

const Wrapper = styled(BlockBox)`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
`;

interface Props {
  theme: string;
}

const StockContent: FunctionComponent<Props> = (props) => {
  const {theme} = props;
  return (
    <Wrapper>
      <StockOverview />

      <StockRank />
      {/*<Loading />*/}
    </Wrapper>
  );
};

export default StockContent;

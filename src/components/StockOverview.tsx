import React, {FunctionComponent} from 'react';
import {FlexBox} from '../common/styles/elements';
import StockOverviewInfo from './StockOverviewInfo';
import styled from 'styled-components';

const Container = styled(FlexBox)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemWrapper = styled.div`
  flex-basis: 45%;
  flex-grow: 0;
  padding-top: 20px;
  padding-left: 20px;

  @media (max-width: 700px) {
    flex-basis: 90%;
  }
`;

const Item = styled.div`
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  padding: 1em;
  background-color: ${({theme}) => theme.box};
  border: 2px solid ${({theme}) => theme.borders};
`;

const ItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ItemTitle = styled.p`
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  color: ${({theme}) => theme.text};
`;

const ItemSubTitle = styled.span`
  margin-left: 5px;
  font-size: 12px;
  color: ${({theme}) => theme.text};
`;

const ItemContentContainer = styled.div`
  margin-top: 10px;
  padding-top: 1.5em;
  border-top: 1px solid ${({theme}) => theme.borders};
`;

const StockOverview: FunctionComponent = () => {
  return (
    <>
      <Container>
        <ItemWrapper>
          <Item>
            <ItemTitleContainer>
              <ItemTitle>KOSPI</ItemTitle>
              <ItemSubTitle>유가증권시장</ItemSubTitle>
            </ItemTitleContainer>
            <ItemContentContainer>
              <StockOverviewInfo stockType={'KOSPI'} />
            </ItemContentContainer>
          </Item>
        </ItemWrapper>
        <ItemWrapper>
          <Item>
            <ItemTitle>KOSDAQ</ItemTitle>
            <ItemSubTitle>코스닥시장</ItemSubTitle>
          </Item>
        </ItemWrapper>
      </Container>
    </>
  );
};

export default StockOverview;

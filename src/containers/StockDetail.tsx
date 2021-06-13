import StockHeader from '../components/StockHeader';
import StockSearchInfo from '../components/StockSearchInfo';
import {FunctionComponent} from 'react';

const StockDetail: FunctionComponent = () => {
  return (
    <>
      <StockHeader detail={true} />
      <StockSearchInfo />
    </>
  );
};

export default StockDetail;

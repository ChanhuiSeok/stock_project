import StockHeader from '../components/StockHeader';
import StockContent from '../components/StockContent';
import {FunctionComponent} from 'react';

const StockMain: FunctionComponent = () => {
  return (
    <>
      <StockHeader main={true} />
      <StockContent />
    </>
  );
};

export default StockMain;

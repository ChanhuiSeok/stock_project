import axios from 'axios';
import {FunctionComponent, useState, useEffect} from 'react';
import request from '../common/apis/request';

interface Props {
  stockType: string;
}

type listStatType = {
  cocnt: number;
  caltoMartTpcd: number;
  issuStkqty: number;
  martpTotamt: number;
  payinCapsAmt: number;
  secncnt: number;
};

const StockOverviewInfo: FunctionComponent<Props> = (props) => {
  const {stockType} = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<listStatType[]>();

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:4000/getListStat');
        setData(response.data.body.items.item);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) console.log('로딩중...');
  console.log(data?.map((item) => item.cocnt));

  return (
    <>
      <div></div>
    </>
  );
};

export default StockOverviewInfo;

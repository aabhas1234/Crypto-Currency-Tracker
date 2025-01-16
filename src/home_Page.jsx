import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import Overview_fundamental_analysis from './overview_fundamental_analysis.jsx';
import Sentiments from './setiments.jsx';
import About_Coin from './coindetails.jsx';
import Tokenomics from './tokenomics.jsx';
import Team from './team.jsx';
import Chart_and_other_details from './chart_and_other_details.jsx';

import Trending_coins from './trending_coins.jsx';
const home_Page = () => {

  const { coinId } = useParams();
  const ids = coinId || "bitcoin";

  const [Price_Data, setPriceData] = useState({});
  const [Trending_Data, setTrendingData] = useState([]);
  const [Btc_Data, setBtcData] = useState({});
  const [res, setres] = useState(0);
  const [loading, setLoading] = useState(true);

  const rupee = '₹';
  const dollar = '$';

  const fetching_bitcoin_data = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=CG-qK2GFNqadWtiUuFScnZv3aWf&ids=${ids}&vs_currency=usd`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    const coin_data = await fetch(url, options)
      .then((res) => res.json())
      .catch((err) => console.error(err));
    console.log(coin_data);
    setBtcData(coin_data[0]);
  };

  const fetching_data_trending = async () => {
    const url = `https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-qK2GFNqadWtiUuFScnZv3aWf`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    const trending = await fetch(url, options)
      .then((res) => res.json())
      .catch((err) => console.error(err));
    console.log(trending.coins[0].item.data.price_change_percentage_24h)
    setTrendingData(trending.coins);
  };

  const fetching_data_price = async () => {
    console.log("ok");
    const url = `https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=CG-qK2GFNqadWtiUuFScnZv3aWf&ids=${ids}&vs_currencies=inr,usd&include_24hr_change=true`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    const price = await fetch(url, options)
      .then((res) => res.json())
      .catch((err) => console.error(err));
    console.log(price);
    setPriceData(price);
  };

  useEffect(() => {
    console.log("ok");
    const intervalId = setInterval(() => {
      setres((prevRes) => !prevRes);
    }, 3600000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const function1 = async () => {
    await fetching_bitcoin_data();
    await fetching_data_trending();
    await fetching_data_price();
    setLoading(false);
  }
  useEffect(() => {
    console.log("ok");
    function1();

  }, [res]);

  if (loading) {
    return (<div>Loading...</div>)
  }




  return (
    <div>
      <div className="p-10 bg-gray-100 flex-wrap sm:flex sm:flex-nowrap gap-3">
        <div className='w-full sm:w-2/3'>
          <Chart_and_other_details Price_Data={Price_Data} Btc_Data={Btc_Data} />
          <Overview_fundamental_analysis Btc_Data={Btc_Data} />
          <Sentiments />
          <About_Coin Btc_Data={Btc_Data} />
          <Tokenomics />
          <Team />
        </div>
        <Trending_coins Trending_Data={Trending_Data} />
      </div>
      <div >
        <div>
          <div className='font-bold font-sans '>You May Also Like</div>
          <div className='flex  overflow-x-auto gap-3 '>
            {Trending_Data.map((value) => (<div className='min-w-[8rem] flex justify-center items-center border-neutral-200 rounded-md border-2  h-[5rem] '>
          <div>    <div className='flex  space-x-2'>
                <img className='h-4 w-4 rounded-full' src={value.item.small}></img>
                <div className='text-[0.4rem] sm:text-[0.6rem]'>{value.item.symbol}</div>
                <div className={classNames({
                  'bg-red-50': value.item.data.price_change_percentage_24h.usd < 0,
                  'bg-emerald-50': value.item.data.price_change_percentage_24h.usd > 0,
                  'flex': true,
                  'items-center': true,
                  'justify-center': true,
                  'text-[0.3rem]': true,
                  'sm:text-[0.6rem]': true,
                  'rounded-md': true,
                  'min-w-7': true,
                  'h-2': true,
                  'sm:w-10': true,
                  'sm:h-4': true,
                  'text-red-400': value.item.data.price_change_percentage_24h.usd < 0,
                  'text-emerald-400': value.item.data.price_change_percentage_24h.usd > 0,
                })}

                >
                  {value.item.data.price_change_percentage_24h.usd < 0 ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.033"
                    height="5"
                    viewBox="0 0 10.033 5"
                    class="fill-current text-red-400 mr-1"
                  >
                    <polygon points="5.016 0 0 0.003 2.506 2.5 5.016 5 7.525 2.5 10.033 0.003 5.016 0" />
                  </svg> : <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.033"
                    height="5"
                    viewBox="0 0 10.033 5"
                    class="fill-current text-emerald-400 mr-1"
                  >
                    <polygon points="5.016 0 2.506 2.5 0 4.999 5.016 5 10.033 4.999 7.525 2.5 5.016 0" />
                  </svg>
                  }
                  {parseFloat(Math.abs(Number(value.item.data.price_change_percentage_24h.usd )).toFixed(2))}%
                </div>
              </div>
              <div className='text-left font-sans font-medium text-[0.6rem] sm:text-[0.7rem]'>{dollar}{parseFloat(Number(value.item.data.price).toFixed(2))}</div>
              <img className='w-full h-4 sm:h-7' src={value.item.data.sparkline} ></img></div>
            </div>))}
          </div>
        </div>
      </div>
    </div>




  );
}

export default home_Page
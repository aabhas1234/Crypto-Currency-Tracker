import React, { useEffect, useState } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import Overview_fundamental_analysis from './overview_fundamental_analysis.jsx';
import Sentiments from './setiments.jsx';
import About_Coin from './coindetails.jsx';
import Tokenomics from './tokenomics.jsx';
import Team from './team.jsx';
import Chart_and_other_details from './chart_and_other_details.jsx';
import You_may_also_like from './You_may_also_like.jsx';
import Trending_coins from './trending_coins.jsx';
const home_Page = () => {

  const { coinId } = useParams();
  const ids = coinId || "bitcoin";

  const [Price_Data, setPriceData] = useState({});
  const [Trending_Data, setTrendingData] = useState([]);
  const [Btc_Data, setBtcData] = useState({});
  const [res, setres] = useState(0);
  const [loading, setLoading] = useState(true);

 

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
      <You_may_also_like Trending_Data={Trending_Data}/>
    </div>




  );
}

export default home_Page

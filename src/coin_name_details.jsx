import React from 'react'

const coin_name_details = ({ Btc_Data }) => {

    

    return (
        <div className='coin_name text-lg flex flex-wrap mb-3'>
            <img src={Btc_Data.image}  className='h-7 w-7' />
            <h1 className='font-sans font-bold mx-2'>{Btc_Data.name}</h1>
            <h2 className='text-gray-500 '>{Btc_Data.symbol}</h2>
            <div className='bg-slate-500 rounded-md h-8 w-14 items-center ml-6 flex justify-center text-white text-xs'>Rank #{Btc_Data.market_cap_rank}</div>
        </div>
    )
}

export default coin_name_details;
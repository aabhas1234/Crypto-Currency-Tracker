import React from 'react'

const overview_fundamental_analysis = ({ Btc_Data }) => {
    const rupee = '₹';
    const dollar = '$';
    return (

        <div className=''>
            <div className='flex flex-wrap mt-7 bg-gray-100'>
                <overview className='mx-2 text-[0.75rem] text-zinc-700 font-sans font-medium '>Overview</overview>
                <fundamentals className='mx-2 text-[0.75rem] text-zinc-700 font-sans font-medium'>Fundamentals</fundamentals>
                <newsinsights className='mx-2 text-[0.75rem] text-zinc-700 font-sans font-medium'>News Insights</newsinsights>
                <sentiments className='mx-2 text-[0.75rem] text-zinc-700 font-sans font-medium'>Sentiments</sentiments>
                <team className='mx-2 text-[0.75rem] text-zinc-700 font-sans font-medium'>Team</team>
                <technicals className='mx-2 text-[0.75rem] text-zinc-700 font-sans font-medium'>Technicals</technicals>
                <tokenomics className='mx-2 text-[0.75rem] text-zinc-700 font-sans font-medium'>Tokenomics</tokenomics>
            </div>
            <hr className="border-t border-gray-300 my-4 " />
            <div className='bg-white p-8 rounded-md'>
                <h1 className='text-gray-600 font-sans font-medium text-left mb-5'>Fundamentals</h1>
                <div className=' grid sm:grid-cols-2 gap-8 xs:grid-cols-1  text-[0.75rem] sm:text-[0.6rem]'>
                    <div>
                        <div className='flex flex-wrap justify-between'><h2 className='text-slate-500' >Bitcoin Price</h2><h2 className='font-semibold font-sans'>{dollar}{Btc_Data.current_price}</h2></div>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>

                    <div>
                        <div className='flex flex-wrap justify-between'><h2 className='text-slate-500' >Trading Volume</h2><h2 className='font-semibold font-sans'>{dollar}{Btc_Data.total_volume}</h2></div>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>

                    <div>
                        <div className='flex flex-wrap justify-between'><h2 className='text-slate-500' >Market Cap Rank</h2><h2 className='font-semibold font-sans'>#{Btc_Data.market_cap_rank}</h2></div>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>

                    <div>
                        <div className='flex flex-wrap justify-between'><h2 className='text-slate-500' >24h High/ 24h Low</h2><h2 className='font-semibold font-sans'>{dollar}{parseFloat(Math.abs(Number(Btc_Data.high_24h )).toFixed(2))}/{dollar}{parseFloat(Math.abs(Number(Btc_Data.low_24h )).toFixed(2))}</h2></div>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>
                    <div>
                        <div className='flex flex-wrap justify-between'><h2 className='text-slate-500'>All-Time-Low</h2><h2 className='font-semibold font-sans'>{dollar}{parseFloat(Math.abs(Number(Btc_Data.atl )).toFixed(2))}</h2></div>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>
                    <div>
                        <div className='flex flex-wrap justify-between'><h2 className='text-slate-500' >Market Cap</h2 ><h2 className='font-semibold font-sans'>{dollar}{Btc_Data.market_cap}</h2></div>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>

                    <div>
                        <div className='flex flex-wrap justify-between'><h2 className='text-slate-500' >Market Cap Dominance</h2><h2 className='font-semibold font-sans'>{parseFloat(Math.abs(Number(Btc_Data.market_cap/1000000000000 )).toFixed(2))}%</h2></div>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>
                    <div>
                        <div className='flex flex-wrap justify-between'><h2 className='text-slate-500' >Volume/Market cap</h2><h2 className='font-semibold font-sans'>{Btc_Data.market_cap}</h2></div>
                        <hr className="border-t border-gray-300 my-4" />
                    </div>
                    <div className='flex flex-wrap justify-between'><h2 className='text-slate-500' >All-Time High</h2><h2 className='font-semibold font-sans'>{dollar}{Btc_Data.ath}</h2></div>
                </div>
            </div>

        </div>
    )
}

export default overview_fundamental_analysis;
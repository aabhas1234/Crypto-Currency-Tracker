import React from 'react'
import classNames from 'classnames';
const Livepricing = ({ Price_Data , Btc_Data}) => {

    const rupee = '₹';
    const dollar = '$';
    const name= Btc_Data.id;
    return (
        <div className='flex flex-wrap mb-5'>
            <div className='text-left'>
                <h1 className='text-sans font-bold text-lg'>{dollar} {Price_Data[name].usd}</h1>
                <h2 className='text-sans text-[0.75rem] font-normal'>{rupee} {Price_Data[name]?.inr}</h2>
            </div>
            <div className='flex flex-wrap'>
                <div className={classNames({
                    'ml-16': true,
                    'mt-1': true,
                    'bg-red-50': Price_Data[name]?.usd_24h_change < 0,
                    'bg-emerald-50': Price_Data[name]?.usd_24h_change > 0,
                    'flex': true,
                    'items-center': true,
                    'justify-center': true,
                    'text-[0.75rem]': true,
                    'rounded-md': true,
                    'w-16': true,
                    'h-6': true,
                    'text-red-400': Price_Data[name]?.usd_24h_change < 0,
                    'text-emerald-400': Price_Data[name]?.usd_24h_change > 0,
                })}

                >
                    {Price_Data[name]?.usd_24h_change < 0 ? <svg
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
                    {parseFloat(Price_Data[name]?.usd_24h_change.toFixed(2))}%
                </div>
                <div className='text-gray-400 text-[0.75rem] m-[0.3rem]'>(24H)</div>
            </div>
        </div>
    )
}

export default Livepricing
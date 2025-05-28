import React from 'react'
import koinx from './utilities/koinx.jpeg';
import classNames from 'classnames';
const trending_coins = ({ Trending_Data }) => {
    //&ids=bitcoin&vs_currencies=inr&vs_currencies=usd&include_24hr_change=true

    return (
        <div className='w-full sm:w-1/3 space-y-2   '>
            <img className="w-full h-[20rem] sm:h-[17rem] rounded-md" src={koinx} />
            <div className='bg-white p-2 rounded-md space-y-4'>
                <div className='font-sans font-bold'>Trending Coins (24h)</div>
                <div className='space-y-3 p-3'>
                    {
                        Trending_Data.slice(0, 3).map((value) => (<div className='space-x-5 
              sm:space-x-20  sm:flex-nowrap flex text-left  '>
                            <div className='flex justify-center  items-centre '>
                                <img src={value.item.small} className='rounded-full h-[1rem] w-[1rem] my-auto'></img>
                                <div className='flex flex-wrap p-1'>
                                    <h1 className='text-[0.3rem] sm:text-[0.6rem] '>{value.item.name}</h1>
                                    <p className='text-[0.3rem] sm:text-[0.6rem]'>({value.item.symbol})</p>
                                </div>

                            </div>

                            <div className={classNames({
                                'bg-red-50': value.item.data.price_change_percentage_24h.usd < 0,
                                'bg-emerald-50': value.item.data.price_change_percentage_24h.usd > 0,
                                'flex': true,
                                'items-center': true,
                                'justify-center': true,
                                'text-[0.3rem]': true,
                                'sm:text-[0.6rem]': true,
                                'rounded-md': true,
                                'w-7': true,
                                'h-2': true,
                                'sm:w-10': true,
                                'sm:h-4': true,
                                'text-red-400': value.item.data.price_change_percentage_24h.usd < 0,
                                'text-emerald-400': value.item.data.price_change_percentage_24h.usd > 0,
                                'text-left': true,
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
                                {parseFloat(Number(value.item.data.price_change_percentage_24h.usd).toFixed(2))}%
                            </div>
                        </div>))
                    }


                </div>
            </div>
        </div>
    )
}

export default trending_coins
import React from 'react'
import classNames from 'classnames';
const you_may_also_like = ({Trending_Data}) => {
  const rupee = '₹';
  const dollar = '$';
  return (
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
  )
}

export default you_may_also_like;
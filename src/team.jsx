import React from 'react'
import pfp1 from './utilities/pfp_1.jpg';
import pfp2 from './utilities/pfp_2.jpg';
import pfp3 from './utilities/pfp3.jpg';
const team = () => {
  return (
    <div className='p-8 bg-white space-y-4'>
    <div className='text-[1.25rem] font-medium font-sans text-left '>Team</div>
      <div className=' text-gray-500 text text-[0.6rem] font-sans font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. </div>
      <div className='space-y-3'>
      <div className='flex flex-wrap sm:flex-nowrap items-center gap-4 bg-indigo-50 p-6 rounded-md'>
          <div>
            <img src={pfp2} className='w-16 h-16 rounded-md'></img>
            <p className='text-[0.6rem] text-left font-bold w-16 justify-center items-center flex'>Alina Williams</p>
          </div>
          <p className=' text-gray-500 text text-[0.6rem] font-sans font-normal text-left'>Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
        </div>
        <div className='flex flex-wrap sm:flex-nowrap items-center gap-4 bg-indigo-50 p-6 rounded-md'>
          <div>
            <img src={pfp1} className='w-16 h-16 rounded-md'></img>
            <p className='text-[0.6rem] text-left font-bold w-16 justify-center flex'>John Smith</p>
          </div>
          <p className=' text-gray-500 text text-[0.6rem] font-sans font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
        <div className='flex flex-wrap sm:flex-nowrap items-center gap-4 bg-indigo-50 p-6 rounded-md'>
          <div>
            <img src={pfp3} className='w-16 h-16 rounded-md'></img>
            <p className='text-[0.6rem] text-left font-bold w-16 justify-center flex'>John Snow</p>
          </div>
          <p className=' text-gray-500 text text-[0.6rem] font-sans font-normal text-left'>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.</p>
        </div>
      </div>
    </div>
  )
}

export default team
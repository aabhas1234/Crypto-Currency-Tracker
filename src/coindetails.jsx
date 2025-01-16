import React from 'react'
import image_1 from './utilities/image_1.jpeg';
import image_2 from './utilities/image-2.jpg';
const coin_details = ({Btc_Data}) => {
  return (
    <div className='p-8 bg-white rounded-md space-y-4'>
        <div className='text-[1.25rem] font-medium font-sans text-left  '>About {Btc_Data.name}</div>
        <div>
          <div className='space-y-2'>
            <h2 className='text-gray-600 font-sans font-bold text-left '> What is {Btc_Data.name}?</h2>
            <p className='text-gray-500 text text-[0.6rem] font-sans font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec eros vitae metus sollicitudin venenatis id ut tortor. Curabitur hendrerit, justo a facilisis feugiat, metus purus volutpat sapien, et tincidunt purus nulla at orci. Suspendisse potenti. </p>
          </div>
          <hr className="border-t border-gray-300 my-4 " />
          <div className='space-y-2'>
            <h2 className='text-gray-600 font-sans font-bold text-left '> Curabitur tincidunt, massa vitae suscipit interdum, eros odio convallis odio, at egestas lorem lacus at justo?</h2>
            <p className='text-gray-500 text text-[0.6rem] font-sans font-normal text-left'>Vestibulum varius, eros a tempus convallis, elit augue cursus purus, ac ultrices arcu arcu nec lorem. Maecenas sagittis efficitur lorem, ac hendrerit libero rhoncus nec. Fusce ut ipsum vel nulla fermentum posuere sed sed arcu. Integer vulputate tristique lorem, quis cursus velit auctor ac.
            </p>
            <p className='text-gray-500 text text-[0.6rem] font-sans font-normal text-left'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut id neque ut libero tempor accumsan. Proin sit amet venenatis felis. Donec aliquet arcu quis mauris pellentesque, nec mollis est fermentum. Sed id varius eros. Nulla volutpat lacus nec justo efficitur malesuada. Mauris pellentesque convallis urna, nec rutrum orci tincidunt ac. Fusce nec nunc risus. Etiam pulvinar luctus tortor, sit amet feugiat metus aliquet quis. Suspendisse fermentum turpis nec nibh facilisis tincidunt. </p>
            <p className='text-gray-500 text text-[0.6rem] font-sans font-normal text-left'>Cras id dignissim nulla. Duis ut nisi at nunc varius mollis. Nullam tincidunt, augue nec posuere pellentesque, justo velit feugiat augue, vel convallis turpis felis vitae urna. In in libero eu sapien condimentum venenatis. Proin et lacus urna. Praesent vel feugiat eros, sed finibus nulla. Nulla nec ante volutpat, accumsan tortor at, malesuada nisl. Nam sit amet felis ultricies, gravida purus ac, tristique libero. Morbi in urna vitae magna viverra laoreet non eget sem. Vivamus in lacus ac lectus viverra mollis. Nam eget mauris vel nisi tristique vestibulum ut in quam. Pellentesque vitae neque nec erat auctor ultricies. Integer laoreet est in mi accumsan, vel interdum libero bibendum.  </p>
          </div>
          <hr className="border-t border-gray-300 my-4 " />
          <div className='space-y-2'>
            <h2 className='text-gray-600 font-sans font-bold text-left '> Already Holding {Btc_Data.name}?</h2>
            <div className="space-x-2 flex">
                <img
                  src={image_1}
                  className="w-1/2 h-32 object-cover object-top  rounded-md"
                  alt="First Image"
                />
                <img
                  src={image_2}
                  className="w-1/2 h-32 object-cover rounded-md object-center"
                  alt="Second Image"
                />
            </div>
            <p className='text-gray-500 text text-[0.6rem] font-sans font-normal text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec eros vitae metus sollicitudin venenatis id ut tortor. Curabitur hendrerit, justo a facilisis feugiat, metus purus volutpat sapien, et tincidunt purus nulla at orci. Suspendisse potenti. </p>
          </div>
        </div>
      </div>
  )
}

export default coin_details
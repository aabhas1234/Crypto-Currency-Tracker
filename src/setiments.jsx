import React from 'react'

const setiments = () => {
    return (
        <div className='bg-white p-8 mt-10 space-y-4 rounded-md' >

            <div className='text-[1.25rem] font-medium font-sans text-left  '>Sentiment</div>
            <div className='keysentiments space-y-2'>
                <div className=' flex  items-center' >
                    <div className='font-medium text-left font-sans text-[1rem] text-gray-700 mr-2'>key Events</div>
                    <div className=' rounded-full bg-gray-500 w-3 h-3 text-white text-[0.5rem] flex justify-center items-center p-1'>i</div>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap space-y-2'>
                    <div className='para1 sm:w-1/2 bg-emerald-200 p-3 rounded-md text-left text-[0.5rem]  sm:mr-3'>
                        <h2 className='font-bold mb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dictum purus, non posuere metus. Nullam vitae tincidunt nulla, ut eleifend elit. Suspendisse potenti.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae convallis libero. Curabitur facilisis leo et elit pellentesque, id convallis nisl aliquam. Duis sit amet tempor elit. Sed quis mauris a neque bibendum aliquam. Vivamus efficitur felis at magna posuere, et efficitur ligula fermentum.</p>
                    </div>
                    <div className='para2 sm:w-1/2 bg-blue-300 p-3 rounded-md text-[0.5rem] text-left  sm:ml-3'>
                        <h2 className='font-bold mb-3' >Suspendisse sit amet turpis vel est aliquet facilisis nec vitae arcu. Curabitur consectetur, sem at aliquet posuere, nisl urna accumsan nisi, vitae dapibus ipsum sapien vel eros.</h2>
                        <p>Suspendisse potenti. Phasellus egestas lectus id lectus iaculis gravida. Fusce a mi eget tortor vestibulum tempor. Sed elementum, eros et pharetra mattis, lacus ipsum auctor nulla, a euismod elit ex in sapien. Nullam sed bibendum erat. Cras dictum sollicitudin nibh, a porttitor nisi vestibulum vel.</p>
                    </div>
                </div>
            </div>
            {/* analysis estimate */}
            <div className='Analysis Estimate space-y-2'>
                <div className=' flex  items-center ' >
                    <div className='font-medium text-left font-sans text-[1rem] text-gray-700 mr-2'>Analysis Estimate</div>
                    <div className=' rounded-full bg-gray-500 w-3 h-3 text-white text-[0.5rem] flex justify-center items-center p-1'>i</div>
                </div>
                <div className='flex items-center gap-6 flex-wrap'>
                    <div className='w-[4.5rem]  h-[4.5rem] rounded-full bg-emerald-50 flex justify-center items-center  p-4 text-emerald-500'>
                        <div className='font-medium text-[1.6rem]'>76</div>
                        <div className='text-[0.5rem]'>%</div>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex  items-center gap-3 text-[0.5rem] w-[35rem]'>
                            <div className='text-gray-500 font-sans font-medium '>Buy</div>
                            <div className='h-[0.35rem] bg-emerald-500 w-1/6 xs:w-1/5 sm:w-1/3  rounded-sm'></div>
                            <div className='text-gray-500 font-sans font-medium'>76%</div>
                        </div>
                        <div className='flex  items-center gap-3 text-[0.5rem]'>
                            <div className='text-gray-500 font-sans mr-0 font-medium '>Hold</div>
                            <div className='h-[0.35rem] bg-gray-400 w-5 rounded-sm mr-0'></div>
                            <div className='text-gray-500 font-sans mr-0 font-medium'>8%</div>
                        </div>
                        <div className='flex  items-center gap-3 text-[0.5rem]'>
                            <div className='text-gray-500 font-sans font-medium '>Sell</div>
                            <div className='h-[0.35rem] bg-red-500 w-10 rounded-sm'></div>
                            <div className='text-gray-500 font-sans font-medium'>16%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default setiments
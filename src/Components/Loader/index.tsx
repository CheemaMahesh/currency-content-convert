import React, { useContext } from 'react';
import { HomeContext } from '@/Utils/context';

const Loader: React.FC = () => {
    const { mode } = useContext(HomeContext);
    return (
        <div className={`flex flex-col h-fit bg-gradient-to-r ${mode == 'Night' ? 'from-black to-[#898D86] text-white' : 'from-blue-400 to-white'}`}>
            {/* <div className='animate-pulse w-full h-[75px] bg-gray-300'></div> */}
            <div className={`w-full h-fit bg-gradient-to-r ${mode == 'Night' ? 'from-black to-[#898D86] text-white' : 'from-blue-400 to-white'} py-3`}>
            <div className='animate-pulse w-3/12 h-[50px] rounded-md bg-gray-300 p-2 m-2'></div>
                <div className='flex justify-center flex-col gap-3 px-16'>
                    {Array(4)?.fill(null)?.map((_, index) => (
                        <div key={index} className='animate-pulse w-7/12 h-[30px] rounded-md bg-gray-300'></div>
                    ))}
                </div>
            </div>
            <div className='w-full h-auto flex items-center gap-4 justify-around flex-wrap p-2'>
            {Array(12)?.fill(null)?.map((_, index) => (
                        <div key={index} className='animate-pulse w-[28%] h-[200px] rounded-md bg-gray-300'></div>
                    ))}
            </div>
        </div>
    );
};

export default Loader;
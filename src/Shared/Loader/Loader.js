import React from 'react';

const Loader = () => {
    return (
        <div>
            <div className="flex h-[100vh]  justify-center items-center">
                 
                <h1 className='text-7xl text-blue-600 font-semibold'>L</h1>
                <div className="border-dashed mt-6 border-black animate-spin inline-block w-10 h-10 border-4 rounded-full" role="status">
                </div>
                <h1 className='text-7xl text-blue-600 font-semibold'>ading</h1>
            </div>
        </div>
    );
};

export default Loader;
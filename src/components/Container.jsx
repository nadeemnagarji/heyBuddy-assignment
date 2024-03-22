import React from 'react';

export default function Container({children}) {
    return (
        <div className=" w-full flex flex-col h-screen items-center bg-[#E5E5E5]" >
            {children}
        </div>
    )
};

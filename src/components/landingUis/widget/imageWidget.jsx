import React from 'react'

export default function ImageWidget({image}) {
    return (
        <div className='w-full absolute inset-0 h-[400px] rounded-lg   sm:h-[500px] xl:h-[600px] mx-auto'>
            <img className='w-full h-full  rounded-lg object-cover' src={image} alt="" />
        </div>
    )
}
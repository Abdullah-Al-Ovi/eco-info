import React from 'react'
import "../globals.css"
import Image from 'next/image'

const layout = ({ children, aqi,temperature,wind,weather }) => {
    return (
        <>
            <div className='wrapper'>
                <div className='overlay'></div>
                <Image 
                src="/background.png"
                className='bg-img' 
                width={700}
                height={1200}
                alt='background image'
                />
                <main className='!z-50 w-full '>
                    <div className='container'>
                        <div className='grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20'>
                {children}
                {aqi}
                {temperature}
                {weather}
                {wind}
        </div>
        </div>
        </main>

            </div>
        </>
    )
}

export default layout
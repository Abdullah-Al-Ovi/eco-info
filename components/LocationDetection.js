"use client"
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const LocationDetection = () => {
    const [loading, setLoading] = useState(false)
    const pathName = usePathname()
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        setLoading(true)
        const params = new URLSearchParams(searchParams)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set("latitude", position.coords.latitude.toString());
                params.set("longitude", position.coords.longitude.toString());
                setLoading(false)
                router.push(`/current?${params.toString()}`);
            });
        }
    }, [pathName,searchParams,router])
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-slate-700 text-white'>
           {
            loading &&  <>
            <Image
            src='/location.gif'
            alt='Loading...'
            width={500}
            height={500}
            className='border rounded-md my-4'
        /> 
        <p className='text-4xl text-center'>Detecting Location............</p>
            
            </>
           }
        </div>
    )
}

export default LocationDetection
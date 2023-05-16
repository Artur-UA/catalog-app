import { ICarsSingle } from '@/interface/carInterface';
import { FC } from 'react'
import Image from 'next/image';
import {Dancing_Script } from 'next/font/google'
import Link from 'next/link';

const inter = Dancing_Script({ weight: ['600', '400'], subsets: ['latin'] })

const CarItem : FC <ICarsSingle>= ({car}) => {
    
  return (
    <div className={`text-center mt-3 pb-5 ${inter.className}`} >
        <div className="text-4xl pb-3">{car.name}</div>
        <Image className='mx-auto rounded-xl' src={car.photo} alt={car.name} width={400} height={300}/>
        <div className="text-2xl">{car.price} USD</div>
        <Link href={`/car/${car.id}`}>
            <div className='text-4xl'>Open link</div>
        </Link>
    </div>
  )
}

export default CarItem
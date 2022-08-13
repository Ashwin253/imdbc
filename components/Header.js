import React from 'react';
import Image from 'next/image';
import { HomeIcon,UserIcon,PhoneIcon,InformationCircleIcon } from '@heroicons/react/solid';
import Headericon from './headericon';
export default function Header() {
  return (
    <>
    <div className="">
    <Headericon Icon={HomeIcon} title="HOME"/>
    <Headericon Icon={UserIcon} title="ACCOUNT"/>
    <Headericon Icon={PhoneIcon} title="CONTACT"/>
    <Headericon Icon={InformationCircleIcon} title="ABOUT"/>
    </div>
   <div className=''>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" width={100} height={100}/>
   </div>
    </>
  )
}

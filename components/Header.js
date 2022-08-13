import React from 'react';
import Image from 'next/image';
import { HomeIcon,UserIcon,PhoneIcon,InformationCircleIcon } from '@heroicons/react/solid';
import Headericon from './headericon';
export default function Header() {
  return (
    <div className="bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between" >
    <div className="flex">
    <Headericon Icon={HomeIcon} title="HOME"/>
    <Headericon Icon={UserIcon} title="ACCOUNT"/>
    <Headericon Icon={PhoneIcon} title="CONTACT"/>
    <Headericon Icon={InformationCircleIcon} title="ABOUT"/>
    </div>
   <div>
    <Image src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" width={100} height={100} className="cursor-pointer active:brightness-110"/>
   </div>
    </div>
  )
}

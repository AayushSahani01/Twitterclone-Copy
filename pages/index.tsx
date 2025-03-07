
import { Inter } from 'next/font/google'
import FeedCard from '@/components/FeedCard/tweets';
import React from 'react';
import { FaXTwitter  } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { CgSearch } from "react-icons/cg";
import { GrNotification } from "react-icons/gr";
import { CgMail } from "react-icons/cg";
//import { Grok02Icon } from '@hugeicons-pro/core-solid-sharp';
//import { LiaInfoCircleSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlineVerified } from "react-icons/md";
import { ImPower } from "react-icons/im";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
const inter = Inter({ subsets: ['latin'] });

interface TwitterSidebarButton{
   title:string;
   icons:React.ReactNode;
}
/// Adding all the buttons to the sidebar:
const sidebarMenu:TwitterSidebarButton[]=[
  {
    title:"Home",
    icons:<GoHomeFill size={28}/>
  },
  {
    title:"Explore",
    icons:<CgSearch size={30}/>
  },
  {
    title:"Notifications",
    icons:<GrNotification size={24}/>
  },
  {
    title:"Messages",
    icons:<CgMail size={24}/>
  },
  // {
  //   title:"Grok",
  //   icons: <LiaInfoCircleSolid size={30}/> 
  // },
  {
    title:"Communities",
    icons:<HiOutlineUsers size={24}/>
  },
  {
    title:"Premium",
    icons:<MdOutlineVerified size={28}/>
  },
  {
    title:"Verified Orgs",
    icons:<ImPower size={24}/>
  },
  {
    title:"Profiles",
    icons:<FaRegUser size={24}/>
  },
  {
    title:"More",
    icons:<CgMoreO size={26}/>
  },
 

]
export default function Home() {
  return (
  <div >
   <div className='grid grid-cols-12 h-screen w-screen px-32'>
      <div className='col-span-3  border-slate-800   '>
      <FaXTwitter size={48}className='hover:bg-slate-800 rounded-full p-2 m-2 w-fit h-fit cursor-pointer'/>
      <div className=''>
        <ul className='m-3'>
        {sidebarMenu.map(item  => (
          <li className='flex justify-start items-center gap-4 gap-y-2 cursor-pointer text-[1.3rem]  px-6 py-2 hover:bg-slate-900 h-fit w-fit rounded-full font-sans hover:font-bold hover:text-2xl'
          key = {item.title}>
            <span>{item.icons}</span>
            <span>{item.title}</span> </li> 
        ))}
        </ul>
      </div>
      <div className='m-4 mr-8 flex justify-center bg-white rounded-full px-4 text-black font-extrabold text-[1.3rem] hover:bg-slate-200'>
        <button className='p-2'>
          Post
        </button>
      </div>
      </div>
      <div className='col-span-6 
      border-r-[0.5px] border-l-[0.5px] border-slate-600'>
       <FeedCard/>
      </div>
      <div className='col-span-6  border-slate-600'> </div>
      <div className='col-span-3'> </div>
      </div>
   </div>
  )
}
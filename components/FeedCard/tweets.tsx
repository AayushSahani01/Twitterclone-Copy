import React from "react";
import Image from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import{ AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FaRegBookmark } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
const FeedCard: React.FC = () => {
    return (
    <div className="border border-t-1  border-b-0 border-slate-800  hover:bg-slate-800 transition-all  ">
      <div className="grid grid-cols-12 ">
        <div className="col-span-2 ">
            <Image src="https://avatars.githubusercontent.com/u/184648033?v=4" alt="Profile Picture"
            height={80} width={80} className="rounded-full mb-4 mx-3  p-3 cursor-pointer"
            />
         </div>
        <div className="col-span-10 m-1 cursor-text">
          <h2>Hey Guys,
            <span className="font-bold text-slate-600"> @AyushSahani</span>
          </h2>
         
            <p>I can mentor 1-2 people 1:1 i.e. teach them Android from scratch, comment below if you are interested </p>
            <div className="flex p-4 gap-21">
              <span><BiMessageRounded/></span>
              <span><AiOutlineRetweet/></span>
              <span><FaRegHeart/></span>
              <span><VscGraph/></span>
            <div className="border-red-200 flex gap-4">
              <span ><FaRegBookmark /></span>
              <span ><FiUpload /></span>
            </div>
            </div>
        </div>
       
      </div>
    </div>
    )
}
export default FeedCard;
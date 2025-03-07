import React from "react";
import Image from "next/image";

const FeedCard: React.FC = () => {
    return (
    <div className="border border-slate-400">
      <div className="grid grid-cols-12 ">
        <div className="grid grid-span-1 rounded-tl-full">
            <Image src="https://pbs.twimg.com/profile_images/1812384539303411712/lpnb0sFo_400x400.jpg" alt="Profile Picture"
            height={50} width={50}
            />
        
        <div className="grid grid-span-11   ">
            <h4>Ayush Sahani</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum officiis veniam illo iure cupiditate obcaecati id quo sequi deserunt, repellendus laboriosam accusamus ullam! Minus, illo! Eveniet sunt provident magni cumque omnis distinctio assumenda facere eius earum excepturi, blanditiis ea ut, ullam cum, quibusdam neque quae aspernatur saepe repudiandae. Ut.</p>
        </div>
        </div>
      </div>
    </div>
    )
}
export default FeedCard;
import Image from "next/image";
import React from "react";

const CommCard = ({ children, img }) => {
    return (
        <div className="relative bg-card-bg max-w-full rounded-[50px] shadow-5xl px-5% flex justify-between  group hover:shadow-4xl mb-10">
            <div className=" overflow-hidden w-[161px] md:w-[230px] lg:w-[340px] rounded-[30px] absolute -top-6 lg:top-auto lg:bottom-2 left-8 md:left-auto group-hover:-top-8 group-hover:lg:top-auto  group-hover:lg:bottom-10 group-hover:shadow-img ease-in-out delay-100 duration-500">
                <Image src={img} height={200} width={200} alt="headshot" className="w-full"></Image>
            </div>
            <div className="font-montserrat px-5% pt-[240px] md:pt-8 pb-12 md:pl-[300px] lg:pl-[425px] group-hover:translate-y-2 ease-in-out delay-100 duration-500">
                <div>{children}</div>
            </div>
        </div>
    );
};

export default CommCard;

import React from "react";
import Image from "next/image";

const ImageCard = ({ image, children, onClick }) => {
    const handleClick = onClick || (() => {});

    return (
        <div className=" clip-path cursor-pointer  " onClick={handleClick}>
            <div className="relative group">
                <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/30  h-full w-full opacity-0 group-hover:opacity-80 z-10 ease-in-out delay-100"></div>
                <Image
                    className="w-full h-auto aspect-[2/3] object-cover object-top group-hover:scale-125 group-hover:-rotate-12 ease-in-out delay-75 duration-300"
                    src={image}
                    alt="image_sample"
                    width={200}
                    height={200}
                ></Image>
            </div>
        </div>
    );
};

export default ImageCard;

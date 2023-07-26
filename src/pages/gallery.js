import React from "react";
import Layout from "./Layout";
import Masonry from "react-masonry-css";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import { useRef } from "react";
import { motion } from "framer-motion";

const Gallery = () => {
    const lightboxRef = useRef(null);

    const images = [
        {
            id: 1,
            image: "/photo/img-1.png",
        },
        {
            id: 2,
            image: "/photo/img-2.jpg",
        },
        {
            id: 3,
            image: "/photo/img-3.jpg",
        },
        {
            id: 4,
            image: "/photo/img-4.jpg",
        },
        {
            id: 5,
            image: "/photo/img-5.jpg",
        },
        {
            id: 6,
            image: "/photo/img-6.jpg",
        },
        {
            id: 7,
            image: "/photo/img-7.jpg",
        },
        {
            id: 12,
            image: "/photo/img-12.jpg",
        },
        {
            id: 8,
            image: "/photo/img-8.jpg",
        },
        {
            id: 9,
            image: "/photo/img-9.jpg",
        },
        {
            id: 10,
            image: "/photo/img-10.jpg",
        },
        {
            id: 11,
            image: "/photo/img-11.jpg",
        },
    ];

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        // 500: 1,
    };

    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };
    const image = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <Layout>
            <section className="p-5%">
                <div className="max-w-4xl md:max-w-screen-xl mx-auto  ">
                    <motion.div>
                        <h1 className="font-extrabold font-montserrat text-6xl">Gallery</h1>
                    </motion.div>

                    <Masonry breakpointCols={breakpointColumnsObj} className="flex gap-4" columnClassName="">
                        {images.map(({ id, image }, idx) => {
                            return (
                                <motion.div
                                    variants={image}
                                    className=" overflow-hidden rounded-2xl cursor-pointer relative group mb-4"
                                    key={id}
                                    onClick={() => {
                                        lightboxRef.current?.openGallery(idx);
                                    }}
                                >
                                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/40  h-full w-full opacity-0 group-hover:opacity-80 z-10 ease delay-75"></div>
                                    <Image
                                        className="w-full rounded-2xl  "
                                        src={image}
                                        width={200}
                                        height={200}
                                        alt={`image-${id}`}
                                    ></Image>
                                </motion.div>
                            );
                        })}
                    </Masonry>
                    <LightGallery
                        ref={lightboxRef}
                        onInit={(ref) => {
                            if (ref) lightboxRef.current = ref.instance;
                        }}
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        dynamic
                        dynamicEl={images.map(({ image, id }) => ({
                            src: image,
                            thumb: image,
                        }))}
                    ></LightGallery>
                </div>
            </section>
        </Layout>
    );
};

export default Gallery;

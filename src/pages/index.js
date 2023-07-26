import Layout from "./Layout";
import Head from "next/head";
import ImageCard from "@/components/Card/ImageCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { useState, useRef, useEffect } from "react";
import lightGallery from "lightgallery";

import { motion } from "framer-motion";

export default function Home() {
    const [slide, setSlide] = useState([]);
    const lightboxRef = useRef(null);
    const swiperRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const scrollRef = useRef(null);

    // Add a function to handle the scroll event

    const images = [
        {
            id: 12,
            image: "/photo/img-12.jpg",
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
    ];

    const swiperParams = {
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },

            1024: {
                slidesPerView: 4,
            },
        },
        pagination: {
            clickable: true,
        },
        on: {
            init: function () {
                // const lg = lightGallery(slide, {
                //     speed: 300,
                // });
                swiperRef.current.addEventListener("lgBeforeClose", () => {
                    swiperRef.current.slideTo(lg.index, 0);
                });
            },
        },
    };
    useEffect(() => {
        swiperRef.current.addEventListener("progress", (e) => {
            const [swiper, progress] = e.detail;
        });

        swiperRef.current.addEventListener("slidechange", (e) => {});
        Object.assign(swiperRef.current, swiperParams);
        swiperRef.current.initialize();
    }, [swiperParams]);

    const variants = {
        offscreen: {
            x: 30,

            opacity: 0,
        },
        onscreen: {
            x: 0,

            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };

    const textAnimate = {
        offscreen: {
            y: 100,
            opacity: 0,
        },

        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 1, duration: 1, damping: 12, ease: 0 },
        },
    };

    const bounce = {
        offscreen: {
            opacity: 0,
            x: -100,
            y: -100,
        },

        onscreen: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 1, duration: 1, damping: 12, ease: 0 },
        },
    };

    const linesIn = {
        offscreen: {
            y: 80,
            opacity: 0,
        },

        onscreen: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", duration: 0.2 },
        },
    };
    return (
        <Layout>
            <Head>
                <title>Shuzuta</title>
                <meta name="description" content="Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="py-10  px-5% relative">
                <div className="max-w-4xl md:max-w-screen-xl mx-auto" id="container">
                    {/* <Swiper
                        ref={swiperRef}
                        loop={true}
                        grabCursor={true}
                        pagination={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        slidesPerView={2}
                        spaceBetween={20}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            // 1200: {
                            //     slidesPerView: 5,
                            // },
                        }}
                        className="mySwiper"
                        on={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {images.map((i, idx) => {
                            return (
                                <SwiperSlide key={i.id}>
                                    <ImageCard
                                        image={i.image}
                                        onClick={() => {
                                            lightboxRef.current?.openGallery(idx);
                                        }}
                                    ></ImageCard>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper> */}
                    <swiper-container
                        ref={swiperRef}
                        // init="false"
                        grab-cursor="true"
                        space-between="20"
                        navigation="true"
                        // autoplay-delay="2500"
                        // autoplay-disable-on-interaction="false"
                        loop="true"
                    >
                        {images.map((i, idx) => {
                            return (
                                <swiper-slide key={i.id}>
                                    <motion.div>
                                        <ImageCard
                                            image={i.image}
                                            onClick={() => {
                                                lightboxRef.current?.openGallery(idx);
                                            }}
                                        ></ImageCard>
                                    </motion.div>
                                </swiper-slide>
                            );
                        })}
                    </swiper-container>
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
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", delay: 0.3 }}
                    className="absolute -bottom-5 -left-28"
                >
                    <svg
                        width="873"
                        height="33"
                        viewBox="0 0 873 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M238.5 0H249.5L233.8 33H223L238.5 0Z" fill="#382BF0" />
                        <path d="M301.5 0H312.5L296.8 33H286L301.5 0Z" fill="#382BF0" />
                        <path d="M258 0H262.981L247.891 33H243L258 0Z" fill="#382BF0" />
                        <path d="M272 0H276.981L261.891 33H257L272 0Z" fill="#382BF0" />
                        <path d="M287 0H291.981L276.891 33H272L287 0Z" fill="#382BF0" />
                        <line x1="308" y1="0.5" x2="873" y2="0.5" stroke="#382BF0" />
                        <line x1="228" y1="32.5" x2="-23" y2="32.5" stroke="#382BF0" />
                    </svg>
                </motion.div>
            </section>
            <section className=" pt-20 p-5% relative">
                <div className="max-w-4xl md:max-w-screen-xl mx-auto py-[5%]">
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 1 }}
                        variants={variants}
                        className={`bg-accent-2 rounded-3xl p-8 md:p-14 mx-4 md:mx-8 md:w-[619px] relative shadow-3xl card `}
                    >
                        <motion.div
                            variants={bounce}
                            className=" bg-gradient-to-b from-accent from-40% to-violet-600 text-white w-[41px] h-[41px] md:w-[93px] md:h-[93px]  text-sm md:text-2xl font-montserrat font-extrabold rounded-[100%] absolute -top-5 -left-5 md:-top-10 md:-left-10  flex justify-center items-center shadow-lg shadow-background"
                        >
                            <motion.span variants={textAnimate}>01.</motion.span>
                        </motion.div>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 1 }}
                            transition={{ staggerChildren: 0.3 }}
                        >
                            <motion.h1
                                className=" text-xl md:text-5xl text-txt3 font-montserrat font-extrabold mb-4"
                                variants={textAnimate}
                            >
                                About me
                            </motion.h1>
                            <motion.p className=" md:text-lg md:leading-9" variants={textAnimate}>
                                Hi! I&apos;m Shuzuta, you can call me Shuu. I&apos;am a self thaught digital
                                illustrator who mainly draw fanarts from my favorite anime/video games.
                                <br /> I&apos;m still in processes of developing my style and are open to
                                learn new things.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, once: true }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="absolute -bottom-3 md:bottom-[10%] -right-[48rem] md:right-0"
                >
                    <svg
                        width="1010"
                        height="32"
                        viewBox="0 0 1010 32"
                        // fill="none"
                        // xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M32 16C32 7.16344 24.8365 0 16 0C7.16339 0 0 7.16344 0 16C0 24.8366 7.16339 32 16 32C24.8365 32 32 24.8366 32 16ZM1010 13L16 13V19L1010 19V13Z"
                            fill="#382BF0"
                        />
                    </svg>
                </motion.div>
            </section>
            <section className="p-5% relative">
                <motion.div className="max-w-4xl md:max-w-screen-xl mx-auto py-5% md:pb-0  flex justify-center relative">
                    <motion.div
                        className="absolute bottom-5 -left-[400px] lg:-top-36 lg:-left-[300px] "
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 20, once: false }}
                        transition={{ type: "spring" }}
                    >
                        <svg
                            width="502"
                            height="98"
                            viewBox="0 0 502 98"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="278" cy="4" r="4" fill="#908D96" />
                            <circle cx="398" cy="4" r="4" fill="#908D96" />
                            <circle cx="278" cy="40" r="4" fill="#908D96" />
                            <circle cx="398" cy="40" r="4" fill="#908D96" />
                            <circle cx="278" cy="22" r="4" fill="#908D96" />
                            <circle cx="398" cy="22" r="4" fill="#908D96" />
                            <circle cx="278" cy="58" r="4" fill="#908D96" />
                            <circle cx="278" cy="76" r="4" fill="#908D96" />
                            <circle cx="278" cy="94" r="4" fill="#908D96" />
                            <circle cx="398" cy="58" r="4" fill="#908D96" />
                            <circle cx="398" cy="76" r="4" fill="#908D96" />
                            <circle cx="398" cy="94" r="4" fill="#908D96" />
                            <circle cx="298" cy="4" r="4" fill="#908D96" />
                            <circle cx="418" cy="4" r="4" fill="#908D96" />
                            <circle cx="298" cy="40" r="4" fill="#908D96" />
                            <circle cx="418" cy="40" r="4" fill="#908D96" />
                            <circle cx="298" cy="22" r="4" fill="#908D96" />
                            <circle cx="418" cy="22" r="4" fill="#908D96" />
                            <circle cx="298" cy="58" r="4" fill="#908D96" />
                            <circle cx="298" cy="76" r="4" fill="#908D96" />
                            <circle cx="298" cy="94" r="4" fill="#908D96" />
                            <circle cx="418" cy="58" r="4" fill="#908D96" />
                            <circle cx="418" cy="76" r="4" fill="#908D96" />
                            <circle cx="418" cy="94" r="4" fill="#908D96" />
                            <circle cx="318" cy="4" r="4" fill="#908D96" />
                            <circle cx="438" cy="4" r="4" fill="#908D96" />
                            <circle cx="358" cy="4" r="4" fill="#908D96" />
                            <circle cx="478" cy="4" r="4" fill="#908D96" />
                            <circle cx="318" cy="40" r="4" fill="#908D96" />
                            <circle cx="438" cy="40" r="4" fill="#908D96" />
                            <circle cx="358" cy="40" r="4" fill="#908D96" />
                            <circle cx="478" cy="40" r="4" fill="#908D96" />
                            <circle cx="318" cy="22" r="4" fill="#908D96" />
                            <circle cx="438" cy="22" r="4" fill="#908D96" />
                            <circle cx="358" cy="22" r="4" fill="#908D96" />
                            <circle cx="478" cy="22" r="4" fill="#908D96" />
                            <circle cx="318" cy="58" r="4" fill="#908D96" />
                            <circle cx="318" cy="76" r="4" fill="#908D96" />
                            <circle cx="318" cy="94" r="4" fill="#908D96" />
                            <circle cx="438" cy="58" r="4" fill="#908D96" />
                            <circle cx="438" cy="76" r="4" fill="#908D96" />
                            <circle cx="438" cy="94" r="4" fill="#908D96" />
                            <circle cx="358" cy="58" r="4" fill="#908D96" />
                            <circle cx="358" cy="76" r="4" fill="#908D96" />
                            <circle cx="358" cy="94" r="4" fill="#908D96" />
                            <circle cx="478" cy="58" r="4" fill="#908D96" />
                            <circle cx="478" cy="76" r="4" fill="#908D96" />
                            <circle cx="478" cy="94" r="4" fill="#908D96" />
                            <circle cx="338" cy="4" r="4" fill="#908D96" />
                            <circle cx="458" cy="4" r="4" fill="#908D96" />
                            <circle cx="378" cy="4" r="4" fill="#908D96" />
                            <circle cx="498" cy="4" r="4" fill="#908D96" />
                            <circle cx="338" cy="40" r="4" fill="#908D96" />
                            <circle cx="458" cy="40" r="4" fill="#908D96" />
                            <circle cx="378" cy="40" r="4" fill="#908D96" />
                            <circle cx="498" cy="40" r="4" fill="#908D96" />
                            <circle cx="338" cy="22" r="4" fill="#908D96" />
                            <circle cx="458" cy="22" r="4" fill="#908D96" />
                            <circle cx="378" cy="22" r="4" fill="#908D96" />
                            <circle cx="498" cy="22" r="4" fill="#908D96" />
                            <circle cx="338" cy="58" r="4" fill="#908D96" />
                            <circle cx="338" cy="76" r="4" fill="#908D96" />
                            <circle cx="338" cy="94" r="4" fill="#908D96" />
                            <circle cx="458" cy="58" r="4" fill="#908D96" />
                            <circle cx="458" cy="76" r="4" fill="#908D96" />
                            <circle cx="458" cy="94" r="4" fill="#908D96" />
                            <circle cx="378" cy="58" r="4" fill="#908D96" />
                            <circle cx="378" cy="76" r="4" fill="#908D96" />
                            <circle cx="378" cy="94" r="4" fill="#908D96" />
                            <circle cx="498" cy="58" r="4" fill="#908D96" />
                            <circle cx="498" cy="76" r="4" fill="#908D96" />
                            <circle cx="498" cy="94" r="4" fill="#908D96" />
                            <circle cx="4" cy="4" r="4" fill="#908D96" />
                            <circle cx="124" cy="4" r="4" fill="#908D96" />
                            <circle cx="4" cy="40" r="4" fill="#908D96" />
                            <circle cx="124" cy="40" r="4" fill="#908D96" />
                            <circle cx="4" cy="22" r="4" fill="#908D96" />
                            <circle cx="124" cy="22" r="4" fill="#908D96" />
                            <circle cx="4" cy="58" r="4" fill="#908D96" />
                            <circle cx="4" cy="76" r="4" fill="#908D96" />
                            <circle cx="4" cy="94" r="4" fill="#908D96" />
                            <circle cx="124" cy="58" r="4" fill="#908D96" />
                            <circle cx="124" cy="76" r="4" fill="#908D96" />
                            <circle cx="124" cy="94" r="4" fill="#908D96" />
                            <circle cx="24" cy="4" r="4" fill="#908D96" />
                            <circle cx="144" cy="4" r="4" fill="#908D96" />
                            <circle cx="24" cy="40" r="4" fill="#908D96" />
                            <circle cx="144" cy="40" r="4" fill="#908D96" />
                            <circle cx="24" cy="22" r="4" fill="#908D96" />
                            <circle cx="144" cy="22" r="4" fill="#908D96" />
                            <circle cx="24" cy="58" r="4" fill="#908D96" />
                            <circle cx="24" cy="76" r="4" fill="#908D96" />
                            <circle cx="24" cy="94" r="4" fill="#908D96" />
                            <circle cx="144" cy="58" r="4" fill="#908D96" />
                            <circle cx="144" cy="76" r="4" fill="#908D96" />
                            <circle cx="144" cy="94" r="4" fill="#908D96" />
                            <circle cx="44" cy="4" r="4" fill="#908D96" />
                            <circle cx="164" cy="4" r="4" fill="#908D96" />
                            <circle cx="84" cy="4" r="4" fill="#908D96" />
                            <circle cx="204" cy="4" r="4" fill="#908D96" />
                            <circle cx="44" cy="40" r="4" fill="#908D96" />
                            <circle cx="164" cy="40" r="4" fill="#908D96" />
                            <circle cx="84" cy="40" r="4" fill="#908D96" />
                            <circle cx="204" cy="40" r="4" fill="#908D96" />
                            <circle cx="44" cy="22" r="4" fill="#908D96" />
                            <circle cx="164" cy="22" r="4" fill="#908D96" />
                            <circle cx="84" cy="22" r="4" fill="#908D96" />
                            <circle cx="204" cy="22" r="4" fill="#908D96" />
                            <circle cx="44" cy="58" r="4" fill="#908D96" />
                            <circle cx="44" cy="76" r="4" fill="#908D96" />
                            <circle cx="44" cy="94" r="4" fill="#908D96" />
                            <circle cx="164" cy="58" r="4" fill="#908D96" />
                            <circle cx="164" cy="76" r="4" fill="#908D96" />
                            <circle cx="164" cy="94" r="4" fill="#908D96" />
                            <circle cx="84" cy="58" r="4" fill="#908D96" />
                            <circle cx="84" cy="76" r="4" fill="#908D96" />
                            <circle cx="84" cy="94" r="4" fill="#908D96" />
                            <circle cx="204" cy="58" r="4" fill="#908D96" />
                            <circle cx="204" cy="76" r="4" fill="#908D96" />
                            <circle cx="204" cy="94" r="4" fill="#908D96" />
                            <circle cx="64" cy="4" r="4" fill="#908D96" />
                            <circle cx="184" cy="4" r="4" fill="#908D96" />
                            <circle cx="104" cy="4" r="4" fill="#908D96" />
                            <circle cx="224" cy="4" r="4" fill="#908D96" />
                            <circle cx="64" cy="40" r="4" fill="#908D96" />
                            <circle cx="184" cy="40" r="4" fill="#908D96" />
                            <circle cx="104" cy="40" r="4" fill="#908D96" />
                            <circle cx="224" cy="40" r="4" fill="#908D96" />
                            <circle cx="64" cy="22" r="4" fill="#908D96" />
                            <circle cx="184" cy="22" r="4" fill="#908D96" />
                            <circle cx="104" cy="22" r="4" fill="#908D96" />
                            <circle cx="224" cy="22" r="4" fill="#908D96" />
                            <circle cx="64" cy="58" r="4" fill="#908D96" />
                            <circle cx="64" cy="76" r="4" fill="#908D96" />
                            <circle cx="64" cy="94" r="4" fill="#908D96" />
                            <circle cx="184" cy="58" r="4" fill="#908D96" />
                            <circle cx="184" cy="76" r="4" fill="#908D96" />
                            <circle cx="184" cy="94" r="4" fill="#908D96" />
                            <circle cx="104" cy="58" r="4" fill="#908D96" />
                            <circle cx="104" cy="76" r="4" fill="#908D96" />
                            <circle cx="104" cy="94" r="4" fill="#908D96" />
                            <circle cx="224" cy="58" r="4" fill="#908D96" />
                            <circle cx="224" cy="76" r="4" fill="#908D96" />
                            <circle cx="224" cy="94" r="4" fill="#908D96" />
                        </svg>
                    </motion.div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 1 }}
                        variants={variants}
                        className={`bg-accent-2 rounded-3xl p-8 md:p-14  mx-4 md:mx-8 md:w-[560px] relative shadow-3xl card `}
                    >
                        <motion.div
                            variants={bounce}
                            className=" bg-gradient-to-b from-accent from-40% to-violet-600 text-white w-[41px] h-[41px] md:w-[93px] md:h-[93px] text-sm md:text-2xl font-montserrat font-extrabold rounded-[100%] absolute -top-5 -left-5 md:-top-10 md:-left-10 flex justify-center items-center"
                        >
                            <motion.span variants={bounce}>02.</motion.span>
                        </motion.div>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 1 }}
                            transition={{ staggerChildren: 0.3 }}
                        >
                            <motion.h1
                                className=" text-xl md:text-5xl text-txt3 font-montserrat font-extrabold mb-4"
                                variants={textAnimate}
                            >
                                Contact
                            </motion.h1>
                            <motion.p className=" md:text-lg md:leading-9" variants={textAnimate}>
                                If you have a specific illustration project in mind, I offer commission
                                services tailored to your needs. Please reach out using the Google form below.
                            </motion.p>
                            <motion.p className=" md:text-lg md:leading-9" variants={textAnimate}>
                                Thank You!
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <div className="absolute right-0 bottom-0 md:bottom-[8%] w-[182px] md:w-auto">
                    <motion.svg
                        width="303"
                        height="72"
                        viewBox="0 0 303 72"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial="offscreen"
                        whileInView={"onscreen"}
                        viewport={{ once: false, amount: 1 }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        <motion.path
                            variants={linesIn}
                            d="M290.628 0H272L340.302 72H361L290.628 0Z"
                            fill="#382BF0"
                        />
                        <motion.path
                            variants={linesIn}
                            d="M244.628 0H226L294.302 72H315L244.628 0Z"
                            fill="#382BF0"
                        />
                        <motion.path
                            variants={linesIn}
                            d="M198.628 0H180L248.302 72H269L198.628 0Z"
                            fill="#382BF0"
                        />
                        <motion.path
                            variants={linesIn}
                            d="M153.628 0H135L203.302 72H224L153.628 0Z"
                            fill="#382BF0"
                        />
                        <motion.path
                            variants={linesIn}
                            d="M110.628 0H92L160.302 72H181L110.628 0Z"
                            fill="#382BF0"
                        />
                        <motion.path
                            variants={linesIn}
                            d="M65.6279 0H47L115.302 72H136L65.6279 0Z"
                            fill="#382BF0"
                        />
                        <motion.path
                            variants={linesIn}
                            d="M18.6279 0H3.69549e-06L68.3023 72H89L18.6279 0Z"
                            fill="#382BF0"
                        />
                    </motion.svg>
                </div>
            </section>
            <section className=" p-20"></section>
        </Layout>
    );
}

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="p-5% flex flex-col md:flex-row items-start relative">
            <div className="relative max-w-4xl md:max-w-screen-xl w-full pt-4  mx-auto flex flex-col md:flex-row md:items-start justify-center md:justify-between  ">
                {/* <div className="w-[37px] lg:w-[120px] absolute top-0 left-0 bottom-0 bg-accent"></div> */}
                <div className="absolute -top-[70px] md:-top-[100px] left-0 w-14 md:w-auto">
                    <motion.svg
                        width="104"
                        height="95"
                        viewBox="0 0 104 95"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{
                            opacity: 0,
                            y: -80,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: false, amount: 1 }}
                        transition={{
                            type: "spring",
                            bounce: 0.5,
                            duration: 1,
                        }}
                    >
                        <rect width="48.8211" height="45" fill="#382BF0" />
                        <rect y="50" width="48.8211" height="45" fill="#382BF0" />
                        <rect x="54.2456" y="50" width="48.8211" height="45" fill="#382BF0" />
                    </motion.svg>
                </div>
                <div className=" pt-4 flex flex-col md:flex-row md:items-start justify-center md:justify-between w-full border-t-[1px] border-accent  ">
                    <div className="flex flex-col items-center md:items-start  -ml-5 md:-ml-2 mb-5">
                        <Link href="/" className="font-montserrat font-semibold p-2 text-sm">
                            HOME
                        </Link>
                        <Link href="/" className="font-montserrat font-semibold p-2 text-sm">
                            GALLERY
                        </Link>
                        <Link href="/commission" className="font-montserrat font-semibold p-2 text-sm">
                            COMMISSION
                        </Link>
                    </div>

                    <div className="flex flex-col items-center md:items-end font-medium font-montserrat text-[12px] pt-2 -ml-5 mb-5">
                        <div className="flex gap-8 md:gap-6 mb-4">
                            <Link
                                href="https://www.facebook.com/Shuzutaaa"
                                target="/"
                                className="group  w-6 md:w-auto"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    // fill="none"
                                    // xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24 12.073C24 5.40365 18.629 0 12 0C5.37097 0 0 5.40365 0 12.073C0 18.0988 4.38823 23.0935 10.125 24V15.563H7.07661V12.073H10.125V9.41306C10.125 6.38751 11.9153 4.71627 14.6574 4.71627C15.9706 4.71627 17.3439 4.95189 17.3439 4.95189V7.92146H15.8303C14.34 7.92146 13.875 8.85225 13.875 9.8069V12.073H17.2031L16.6708 15.563H13.875V24C19.6118 23.0935 24 18.0988 24 12.073Z"
                                        className=" text-txt3 fill-current group-hover:text-accent "
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="https://twitter.com/shuzuta/"
                                target="/"
                                className="group  w-6 md:w-auto"
                            >
                                <svg
                                    width="30"
                                    height="24"
                                    viewBox="0 0 30 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M26.5727 5.98123C26.5915 6.24372 26.5915 6.50626 26.5915 6.76875C26.5915 14.775 20.484 24 9.32113 24C5.88207 24 2.68735 23.0062 0 21.2813C0.488625 21.3375 0.958392 21.3563 1.46582 21.3563C4.30345 21.3563 6.91566 20.4 9.00164 18.7688C6.33309 18.7125 4.09677 16.9688 3.32626 14.5687C3.70214 14.625 4.07797 14.6625 4.47265 14.6625C5.01762 14.6625 5.56264 14.5874 6.07001 14.4563C3.28872 13.8937 1.20268 11.4562 1.20268 8.51249V8.43752C2.01073 8.88752 2.95043 9.16877 3.94637 9.20622C2.31141 8.1187 1.24028 6.26247 1.24028 4.16246C1.24028 3.03748 1.5409 2.00623 2.06713 1.10622C5.05516 4.78122 9.54661 7.18118 14.583 7.44372C14.489 6.99372 14.4326 6.52502 14.4326 6.05626C14.4326 2.71872 17.1388 0 20.5026 0C22.2503 0 23.8289 0.731248 24.9377 1.9125C26.3095 1.65001 27.625 1.14374 28.7902 0.450003C28.3391 1.85628 27.3807 3.03754 26.1216 3.78748C27.3432 3.6563 28.5271 3.31872 29.617 2.85002C28.7903 4.04997 27.7566 5.11868 26.5727 5.98123Z"
                                        className=" text-txt3 fill-current  group-hover:text-accent "
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="https://youtube.com/@shuzuta1088"
                                target="/"
                                className="group  w-6 md:w-auto"
                            >
                                <svg
                                    width="35"
                                    height="24"
                                    viewBox="0 0 35 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M33.4201 3.75519C33.0276 2.27706 31.8709 1.11294 30.4024 0.717875C27.7405 0 17.0667 0 17.0667 0C17.0667 0 6.39294 0 3.731 0.717875C2.26244 1.113 1.10581 2.27706 0.71325 3.75519C0 6.43438 0 12.0243 0 12.0243C0 12.0243 0 17.6141 0.71325 20.2933C1.10581 21.7714 2.26244 22.8871 3.731 23.2821C6.39294 24 17.0667 24 17.0667 24C17.0667 24 27.7404 24 30.4024 23.2821C31.8709 22.8871 33.0276 21.7714 33.4201 20.2933C34.1334 17.6141 34.1334 12.0243 34.1334 12.0243C34.1334 12.0243 34.1334 6.43438 33.4201 3.75519ZM13.5758 17.0994V6.94906L22.4969 12.0244L13.5758 17.0994Z"
                                        className=" text-txt3 fill-current  group-hover:text-accent "
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="https://www.pixiv.net/en/users/41548542"
                                target="/"
                                className="group  w-6 md:w-auto"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_53_775)">
                                        <path
                                            d="M4.93501 1.23154e-05C4.28653 -0.00143799 3.64415 0.12522 3.04475 0.372713C2.44536 0.620206 1.90075 0.98366 1.44221 1.44221C0.98366 1.90075 0.620206 2.44536 0.372713 3.04475C0.12522 3.64415 -0.00143799 4.28653 1.23154e-05 4.93501V19.065C-0.00143799 19.7135 0.12522 20.3559 0.372713 20.9553C0.620206 21.5547 0.98366 22.0993 1.44221 22.5578C1.90075 23.0164 2.44536 23.3798 3.04475 23.6273C3.64415 23.8748 4.28653 24.0015 4.93501 24H19.065C19.7135 24.0015 20.3559 23.8748 20.9553 23.6273C21.5547 23.3798 22.0993 23.0164 22.5578 22.5578C23.0164 22.0993 23.3798 21.5547 23.6273 20.9553C23.8748 20.3559 24.0015 19.7135 24 19.065V4.93501C24.0015 4.28653 23.8748 3.64415 23.6273 3.04475C23.3798 2.44536 23.0164 1.90075 22.5578 1.44221C22.0993 0.98366 21.5547 0.620206 20.9553 0.372713C20.3559 0.12522 19.7135 -0.00143799 19.065 1.23154e-05H4.93501ZM12.745 4.54701C14.926 4.54701 16.803 5.22301 18.144 6.39401C18.8123 6.97191 19.3474 7.68769 19.7127 8.49212C20.078 9.29655 20.2647 10.1705 20.26 11.054C20.265 12.908 19.38 14.53 18.003 15.617C16.628 16.709 14.778 17.314 12.745 17.314C10.431 17.314 8.28501 16.472 8.28501 16.472V19.19C8.68201 19.306 9.33301 19.555 8.92001 19.969H5.79001C5.38001 19.559 5.98001 19.319 6.43401 19.19V7.66601C5.38101 8.47601 4.84101 9.17601 4.56601 9.69701C4.88601 10.717 4.28201 10.666 4.28201 10.666L3.19201 8.93601C3.19201 8.93601 7.06001 4.54701 12.745 4.54701ZM12.555 5.51801C11.132 5.51501 9.37101 5.99101 8.28501 6.76201V15.408C9.27301 15.895 10.769 16.24 12.545 16.24H12.555C14.151 16.24 15.535 15.647 16.485 14.707C17.437 13.759 17.971 12.524 17.977 11.024C17.972 9.48401 17.473 8.16001 16.557 7.16401C15.639 6.17201 14.283 5.51901 12.555 5.51801Z"
                                            className=" text-txt3 fill-current  group-hover:text-accent "
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_53_775">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Link>
                        </div>

                        <Link
                            href="mailto:shuzuta2000@gmail.com"
                            className="font-montserrat text-[12px] hover:font-semibold"
                        >
                            shuzuta2000@gmail.com
                        </Link>

                        <span className=" ">Art & Design © 2023 by Shuzuta</span>
                        <span className=" ">All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

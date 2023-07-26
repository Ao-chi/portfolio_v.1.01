import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Custom404 = () => {
    return (
        <Layout>
            <section className="p-5% grid place-items-center">
                <div className=" text-center font-montserrat py-5% px-24 shadow-inner shadow-gray-400 rounded-[50px] backdrop-blur-3xl">
                    <h1 className=" font-black text-[12.5rem] leading-none">404</h1>
                    <p className="font-montserrat font-semibold text-5xl tracking-wider -mt-6 mb-7">
                        page not found
                    </p>
                    <p className="font-semibold text-2xl text-txt_white">
                        You’ve gone too far. Let’s take you back{" "}
                        <Link href="/" className="text-txt_white font-bold underline hover:text-accent">
                            Home
                        </Link>
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default Custom404;

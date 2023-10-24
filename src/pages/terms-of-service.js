import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Link from "next/link";
import { useRouter } from "next/router";

const TermOfService = () => {
    const router = useRouter();
    const [activeLink, setactiveLink] = useState("");
    useEffect(() => {
        const currentLink = router.asPath;
        setactiveLink(currentLink);
    }, []);

    return (
        <Layout>
            <section className="p-5%   ">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 max-w-4xl md:max-w-screen-xl mx-auto relative">
                    <aside className="hidden lg:block relative">
                        <nav className="flex flex-col gap-4 max-w-[200px] font-medium fixed pt-3 ">
                            <Link
                                href="/terms-of-service#general"
                                scroll={false}
                                className={`hover:font-bold focus:font-bold transition-all ease-in-out duration-300 delay-75 ${
                                    activeLink === "/terms-of-service#general" ? "font-bold" : ""
                                }`}
                            >
                                General Terms
                            </Link>
                            <Link
                                href="#refund-policy-&-additional-fees"
                                scroll={false}
                                className={`hover:font-bold focus:font-bold transition-all ease-in-out duration-300 delay-75 ${
                                    activeLink === "/terms-of-service#refund-policy-&-additional-fees"
                                        ? "font-bold"
                                        : ""
                                }`}
                            >
                                Refund Policy & Additional Fees
                            </Link>
                            <Link
                                href="#commission-process-&-deliverables"
                                scroll={false}
                                className={`hover:font-bold focus:font-bold transition-all ease-in-out duration-300 delay-75 ${
                                    activeLink === "/terms-of-service#commission-process-&-deliverables"
                                        ? "font-bold"
                                        : ""
                                }`}
                            >
                                Commission Process & Deliverables
                            </Link>
                            <Link
                                href="#payment-method"
                                scroll={false}
                                className={`hover:font-bold focus:font-bold ${
                                    activeLink === "/terms-of-service#payment-method" ? "font-bold" : ""
                                }`}
                            >
                                Payment Method
                            </Link>
                        </nav>
                    </aside>
                    <main>
                        <div className="max-w-4xl md:max-w-screen-xl mx-auto ">
                            <div className="mb-3 lg:mb-0">
                                <h1 className=" font-montserrat font-extrabold text-[32px] lg:text-[64px] tracking-tighter">
                                    Terms of Service
                                </h1>
                                <p className=" text-base lg:text-lg">
                                    By commissioning me, it means you have read and accepted all the terms
                                    stated below.
                                </p>
                            </div>

                            <section className="py-5%" id="general">
                                <h2 className="font-montserrat font-bold text-2xl lg:text-[32px] lg:font-extrabold mb-5">
                                    General Terms
                                </h2>
                                <ul className=" list-disc pl-7 lg:text-lg font-raleway">
                                    <li>I have the right to decline commissions.</li>
                                    <li>
                                        Commissions are for <strong>PERSONAL USE ONLY!</strong> That means you
                                        cannot at all circumstances reproduce or sell the illustration to earn
                                        profit from it.
                                    </li>
                                    <li>
                                        I reserve the right to post the commissioned artwork online, in my
                                        portfolio as well as in publications such as art books.
                                    </li>
                                    <li>Please write appropriate credit when sharing.</li>
                                    <li>
                                        The prices listed are base prices. Prices may change depending on
                                        complexity of the commission including backgrounds and such.
                                    </li>
                                    <li>For commercial use commissions, pricing negotiation is required.</li>
                                    <li>I work on my own phase so please give deadlines if necessary.. </li>
                                    <li>
                                        Please provide a detailed information about the character to be drawn
                                        such as image reference, pose reference and the like.( ie. lack of
                                        references and information may result in a design fee).
                                    </li>
                                </ul>
                            </section>
                            <section className="py-5%" id="refund-policy-&-additional-fees">
                                <h2 className="font-montserrat font-bold text-2xl lg:text-[32px] lg:font-extrabold mb-5">
                                    Refund Policy & Additional Fees
                                </h2>
                                <ul className=" list-disc pl-7 lg:text-lg font-raleway">
                                    <li>
                                        <strong>All Commissions are non-refundable.</strong> There are no
                                        refunds once the work is started/completed.
                                    </li>
                                    <li>
                                        Refunds are only applicable if I (artist) haven’t started the
                                        commission after payment or has canceled the commission.
                                    </li>
                                    <li>
                                        Revisions are free of charge during the sketch phase. Once the line
                                        art has started you can only have <strong>2 major revisions</strong>{" "}
                                        after that additional revisions will be charged. Rush fees are + 25%
                                        of the commission.
                                    </li>
                                    <li>Rush fees are + 25% of the commission.</li>
                                    <li>Additional characters will be charged (+50% each) </li>
                                    <li>
                                        Accessories, companions and detailed backgrounds have additional fees.
                                    </li>
                                    <li>
                                        Commercial commissions will be at a higher rate. To be discussed
                                        through email or direct message.
                                    </li>
                                </ul>
                            </section>
                            <section className="py-5%" id="commission-process-&-deliverables">
                                <h2 className="font-montserrat font-bold text-2xl lg:text-[32px] lg:font-extrabold mb-5">
                                    Commission Process & Deliverables
                                </h2>
                                <ul className=" list-disc pl-7 lg:text-lg font-raleway">
                                    <li>
                                        You can send me a message through my social media accounts or send me
                                        an E-mail at shuzuta200@gmail.com.
                                    </li>
                                    <li>
                                        Once the commission is accepted an invoice will be sent via Paypal.
                                    </li>
                                    <li>
                                        After payment, next is the sketch phase, here minor revisions are free
                                        of charge. (Please refer to refund policy & additional fees for
                                        revision guide.)
                                    </li>
                                    <li>
                                        After confirmation with the sketch designs I will now proceed with the
                                        final illustration.
                                    </li>
                                    <li>
                                        It will take a minimum of <strong>1 week to 30 days</strong> for
                                        completing a commission, depending factors such as health, the
                                        complexity of the commissioned piece, other work and con seasons.
                                    </li>
                                    <li>
                                        For the finished work you will receive both high and low resolution
                                        images in JPG/PNG format.
                                    </li>
                                </ul>
                            </section>
                            <section className="py-5%" id="payment-method">
                                <h2 className="font-montserrat font-bold text-2xl lg:text-[32px] lg:font-extrabold mb-5">
                                    Payment Method
                                </h2>
                                <ul className=" list-disc pl-7 lg:text-lg font-raleway">
                                    <li>Accepted currency is in USD.</li>
                                    <li>
                                        All commissioners will be invoiced and payments are received via
                                        Paypal.
                                    </li>
                                    {/* <li> */}
                                    {/* The commissioner will shoulder the Paypal transaction fee. (Please use */}
                                    {/* the fee calculator). */}
                                    {/* </li> */}
                                    <li>
                                        All commissions are paid 100% upfront or a split 50% upfront and 50%
                                        after sketch approval.
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </main>
                </div>
                <div className="p-5%"></div>
            </section>
        </Layout>
    );
};

export default TermOfService;

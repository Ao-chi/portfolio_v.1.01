import React from "react";
import Layout from "./Layout";
import CommCard from "@/components/Card/commCard";
import Link from "next/link";

const CommissionPage = () => {
    return (
        <Layout>
            <section className="p-5%">
                <div className="max-w-4xl md:max-w-screen-xl mx-auto">
                    <div className=" py-7 lg:py-16 px-7 lg:px-20 max-w-3xl bg-card-bg shadow-4xl rounded-40 mb-28">
                        <h1 className=" font-montserrat font-black text-2xl lg:text-[64px] mb-2 lg:mb-8">
                            Commission Info
                        </h1>
                        <p>
                            For commissions please send me a DM through my social media accounts or email at{" "}
                            <Link
                                href="mailto:shuzuta2000@gmail.com"
                                className="font-medium hover:font-semibold"
                            >
                                shuzuta2000@gmail.com
                            </Link>
                        </p>
                    </div>

                    <div className="py-5% mb-10">
                        <CommCard img="/images/bust.jpg">
                            <div className="mb-5">
                                <h2 className="text-txt_white text-xl md:text-[40px] font-bold border-b-4 border-accent pb-3">
                                    BUST SHOT - 40 USD
                                </h2>
                            </div>
                            <div>
                                <div className="mb-5">
                                    <p className="font-semibold">NOTES:</p>
                                    <p>From head to chest</p>
                                    <p>One character illustration</p>
                                    <p>Simple/flat color Background</p>
                                </div>
                                <div>
                                    <p className="font-semibold">ADDITIONAL FEES:</p>
                                    <p>Accessories (weapon, wings, etc.) </p>
                                    <p>Companion (pet, mount, spirit, etc.)</p>
                                    <p>Detailed background (starts a 30usd)</p>
                                    <p>Commercial use (+25% of original price)</p>
                                    <p>Additional characters (+50% each)</p>
                                </div>
                            </div>
                        </CommCard>
                    </div>
                    <div className="py-5% mb-10">
                        <CommCard img="/images/halfbody.jpg">
                            <div className="mb-5">
                                <h2 className="text-txt_white text-xl md:text-[40px] font-bold border-b-4 border-accent pb-3">
                                    HALF BODY - 40 USD
                                </h2>
                            </div>
                            <div>
                                <div className="mb-5">
                                    <p className="font-semibold">NOTES:</p>
                                    <p>From head to waist</p>
                                    <p>One character illustration</p>
                                    <p>Simple/flat color Background</p>
                                </div>
                                <div>
                                    <p className="font-semibold">ADDITIONAL FEES:</p>
                                    <p>Accessories (weapon, wings, etc.) </p>
                                    <p>Companion (pet, mount, spirit, etc.)</p>
                                    <p>Detailed background (starts a 30usd)</p>
                                    <p>Commercial use (+25% of original price)</p>
                                    <p>Additional characters (+50% each)</p>
                                </div>
                            </div>
                        </CommCard>
                    </div>
                    <div className="pt-5%">
                        <CommCard img="/images/fullbody.jpg">
                            <div className="mb-5">
                                <h2 className="text-txt_white text-xl md:text-[40px] font-bold border-b-4 border-accent pb-3">
                                    FULL BODY - 100 USD
                                </h2>
                            </div>
                            <div>
                                <div className="mb-5">
                                    <p className="font-semibold">NOTES:</p>
                                    <p>From head past knees</p>
                                    <p>One character illustration</p>
                                    <p>Simple/flat color Background</p>
                                </div>
                                <div>
                                    <p className="font-semibold">ADDITIONAL FEES:</p>
                                    <p>Accessories (weapon, wings, etc.) </p>
                                    <p>Companion (pet, mount, spirit, etc.)</p>
                                    <p>Detailed background (starts a 30usd)</p>
                                    <p>Commercial use (+25% of original price)</p>
                                    <p>Additional characters (+50% each)</p>
                                </div>
                            </div>
                        </CommCard>
                    </div>
                </div>
            </section>
            <section className="p-5%">
                <div className="bg-card-bg max-w-4xl md:max-w-screen-xl mx-auto p-5%  rounded-40 shadow-5xl">
                    <div className="mb-5 ">
                        <h1 className=" font-montserrat font-extrabold text-[32px] lg:text-[64px] tracking-tighter">
                            Terms of Service
                        </h1>
                    </div>
                    <div className="py-3 flex flex-col lg:flex-row lg:gap-32">
                        <ul className=" list-disc pl-7 lg:text-lg font-raleway flex-1">
                            <li>Prices listed above are base prices.</li>
                            <li>
                                Commissions are for <span className="font-bold">PERSONAL USE ONLY!</span> That
                                means you cannot at all circumstances reproduce or sell the illustration to
                                earn profit from it. (for commerial use further discussion is needed.)
                            </li>
                            <li>
                                Please provide a detailed information about the character to be drawn such as
                                image reference, pose reference and the like.( ie. lack of references and
                                information may result in a design fee).
                            </li>
                            <li>I have the right to decline commissions.</li>
                        </ul>
                        <ul className=" list-disc pl-7 lg:text-lg font-raleway flex-1">
                            <li>
                                <span className="font-bold"> No Refunds. </span>Refunds and cancellations are
                                only allowed if the commission has not been started.
                            </li>
                            <li>
                                Revision are free of charge during sketch phase, after that you have remaining
                                <span className="font-bold"> 2 major revisions.</span>
                            </li>
                            <li>Payments will be through Paypal with an invoice.</li>
                            <li>I accept 100% upfront or 50% split upfront payments.</li>
                            <li>
                                The commissioner will shoulder the Paypal transaction fee. (Use the{" "}
                                <Link
                                    href="https://www.salecalc.com/paypal?p=100&l=us&r=0&e=0&f=0&m=0&c=0"
                                    target="/"
                                    className="underline underline-offset-2  hover:font-bold"
                                >
                                    fee calculator
                                </Link>{" "}
                                to check the amount fee)
                            </li>
                            <li>
                                Read the full TOS{" "}
                                <Link
                                    href="/terms-of-service"
                                    className=" underline underline-offset-2 font-semibold hover:font-bold"
                                >
                                    here.
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-12"></div>
            </section>
        </Layout>
    );
};

export default CommissionPage;

import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterest, FaGoogle } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

export const Foater = () => {
    return (
        <>
            <section className='  gap-4 foater justify-content-center border-bottom  pt-[40%] ' >
                <div className=' flex flex-lg-row pt-[4%] divone ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}  >
                    <div className='  w-[40%] pl-[4%]  '>
                        <h3>GET IN TOUCH</h3>
                        <p >Any q uestions? Let us Know in store at 8th floor, 379 Hudson St,
                            New York,NY 10018 or call us on (+1) 96 716 6879
                        </p>
                        <div className='flex flex-row  gap-4  text-reset'>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaPinterest />
                            <FaGoogle />
                            <FiInstagram />
                        </div>

                    </div>

                    <div className='flex flex-row gap-4  divtwo  w-50 justify-evenly items-center  text-reset'>
                        <div>
                            <h3>CATEGORIES</h3>
                            <h6 >Men</h6>
                            <h6 >Women</h6>
                            <p >Dresses</p>
                            <h6>Sunglasses</h6>
                        </div>
                        <div >
                            <h3>LINKS</h3>
                            <h6>Search</h6>
                            <h6>About Us</h6>
                            <h6>Contact Us</h6>
                            <h6>Returns</h6>
                        </div>
                        <div>
                            <h3>Help</h3>
                            <h6>Track Order</h6>
                            <h6>Returns</h6>
                            <h6>Shipping</h6>
                            <h6>FAQs</h6>
                        </div>
                        
                        <div className='flex flex-col gap-3  ' >
                            <h3>NEWSLETTER</h3>
                            <input type='text' placeholder='Email Address' className='  ' />
                            <button className='bg-slate-900 text-white hover:bg-red-500 rounded-full  py-2'>SUBSCRIBE</button>
                        </div>

                    </div>



                </div>
                <div className='text-center p-4 divone ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} >
                    Copyright:© 2024  Shopify Theme Developed by MassTechnilogist All rights reserved.

                </div>


            </section>


        </>
    );
};



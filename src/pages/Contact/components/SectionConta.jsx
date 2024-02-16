import React from 'react';

export const SectionConta = () => {

    return (
        <>
            <section className='heding1'>
                <div className='heding1 flex justify-center items-center text-white font-meryem' >
                    <h1>CONTACT</h1>

                </div>
                <div className='flex flex-row gap-2 '>
                    <div className='flex pl-[10%] pt-[4%]' >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13294.859213948514!2d-7.613917687158205!3d33.5867534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2befcff14a3%3A0xcba2a7e012e3ada9!2sTwin%20Center%20Shopping%20Mall!5e0!3m2!1sar!2sma!4v1707923215340!5m2!1sar!2sma" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='pt-[5%] px-[4%] w-[40vw]  '>
                        <h3>Send us your message</h3>
                        <div className='gap-3 flex flex-col py-4 rounded-full'>
                            <input type="text" required className="w-100 py-3  px-2 bg-[#8583834c]" placeholder='Name' />
                            <input type="text" required className="w-100 py-3  px-2 bg-[#8583834c]"  placeholder='Email' />
                            <input type="text" required className="w-100 py-3  px-2 bg-[#8583834c]"  placeholder='Phone' />
                            <textarea  className='h-40' name="" id="" cols="20" rows="15" >Message</textarea>

                        </div>
                        <button className='hover:bg-red-600 text-white bg-slate-950 rounded-full px-5 py-2'>SEND</button>
                    </div>

                </div>
            </section>

        </>
    );
};


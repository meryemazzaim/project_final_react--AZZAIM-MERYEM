import React from 'react';
import item16 from "../../../assets/images/banner-14.jpg"

export const SectiAbout = () => {
    return (
        <>
            <div className='heding1 flex justify-center items-center text-white font-meryem' >
                <h1>ABOUT</h1>

            </div>


            <div className=' flex flex-lg-row pt-[4%] '>
                <div className=' w-[40vw]  pl-[10%]  ' >
                    <img src={item16} alt=""  />

                </div>


                <div className='w-75   pt-4 pl-[2%] ' >

                    <h1>Our Story</h1>
                    <p >
                        Tout le monde aime les centres commerciaux. En été comme en hiver, les gens se bousculent dans ces endroits fantastiques remplis de boutiques variées et d'animations diverses. En effet, même si vous ne souhaitez pas acheter quelque chose, il est toujours intéressant de passer du temps dans les centres commerciaux.

                        Le centre commercial est l'endroit idéal pour passer un bon moment avec sa famille, ses amis ou ses collègues de travail.
                        Les gens y vont notamment pour déguster un bon hamburger assis près de la fontaine ou tout en regardant un spectacle de danse.
                        Le centre commercial est l'endroit idéal pour                         Le centre commercial est l'endroit idéal pour passer un bon moment avec sa famille, ses amis ou ses collègues de travail. Les gens y vont notamment pour déguster un bon hamburger assis près de la fontaine ou tout en regardant un spectacle de danse.</p>
                    passer un bon moment avec sa famille, ses amis ou ses collègues de travail. Les gens y vont notamment pour déguster un bon hamburger assis près de la fontaine ou tout en regardant un spectacle de danse.

                    <div >
                        <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                    </div>
                    <h6>- Steve Job’s</h6>
                </div>


            </div>
        </>
    );
};


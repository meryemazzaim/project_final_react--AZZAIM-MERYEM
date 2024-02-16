
import React, { useState } from 'react';
import slide1 from "../../../assets/images/master-slide-04.jpg"
import slide2 from "../../../assets/images/master-slide-01.jpg"
import slide3 from "../../../assets/images/master-slide-02.jpg"
import slide4 from "../../../assets/images/master-slide-03.jpg"
import banner from "../../../assets/images/banner-02.jpg"
import banner2 from "../../../assets/images/banner-03.jpg"
import banner3 from "../../../assets/images/banner-04.jpg"
import banner4 from "../../../assets/images/banner-05.jpg"
import banner5 from "../../../assets/images/banner-09.jpg"
import banner7 from "../../../assets/images/banner-07.jpg"
import Card from 'react-bootstrap/Card';
import img1 from "../../../assets/images/blog-01.jpg"
import img2 from "../../../assets/images/blog-02.jpg"
import img3 from "../../../assets/images/blog-03.jpg"
import { useNavigate } from 'react-router-dom';
import item1 from "../../../assets/images/item-15.jpg"
import item2 from "../../../assets/images/item-13.jpg"
import item3 from "../../../assets/images/item-04.jpg"
import item4 from "../../../assets/images/item-10.jpg"
import item5 from "../../../assets/images/item-16.jpg"
import item6 from "../../../assets/images/item-12.jpg"
import item7 from "../../../assets/images/item-03.jpg"
import Carousel from 'react-bootstrap/Carousel';

import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

import { Button, Modal } from 'flowbite-react';






export const HomeSection1 = () => {
    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate()
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}  >
                <Carousel.Item>
                    {/* <img style={{ backgroundImage: `url(${slide1})` }} alt="" className='h-full w-full' /> */}
                    <img src={slide1} alt="" />
                    <Carousel.Caption>
                        <div className='bg-no-repeat w-[100%] h-[50vh] bg-slide1 text-white  flex justify-center align-middle items-center gap-y-5 flex-col '>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-xl'>Woman Collection 2018</p>
                                <h1 className='font-bold text-4xl'>NEW ARRIVALS</h1>
                                <button className='bg-white py-3 rounded-2xl lg:w-[13vw] w-[50vw] text-black'> Shop Now</button>
                            </div>   </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} alt="" />
                    <Carousel.Caption>
                        <div className='bg-no-repeat w-[100%] h-[50vh] bg-slide1 text-white  flex justify-center align-middle items-center gap-y-5 flex-col '>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-xl'>Woman Collection 2018</p>
                                <h1 className='font-bold text-4xl'>NEW ARRIVALS</h1>
                                <button className='bg-white py-3 rounded-2xl lg:w-[13vw] w-[50vw] text-black'> Shop Now</button>
                            </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide3} alt="" />
                    <Carousel.Caption>
                        <div className='bg-no-repeat w-[100%] h-[50vh] bg-slide1 text-white  flex justify-center align-middle items-center gap-y-5 flex-col '>
                            <div className='flex justify-center items-center flex-col'>
                                <p className='text-xl'>Woman Collection 2018</p>
                                <h1 className='font-bold text-4xl'>NEW ARRIVALS</h1>
                                <button className='bg-white py-3 rounded-2xl lg:w-[13vw] w-[50vw] text-black'> Shop Now</button>
                            </div>  </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className='section2'>
                <div className='flex flex-col lg:flex-row gap-8 p-6 lg:p-20'>
                    <div className='flex flex-col w-full lg:w-auto gap-8'>
                        <div className='overflow-hidden relative'>
                            <img className='hover:scale-110 duration-500' src={banner} alt="" />
                            <div className='flex justify-center'>
                                <button className='absolute bottom-9 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>DRESSES</button>
                            </div>
                        </div>
                        <div className='overflow-hidden relative'>
                            <img className='hover:scale-110 duration-500' src={banner4} alt="" />
                            <div className='flex justify-center'>
                                <button className='absolute bottom-10 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>SUNGLASSES</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-full lg:w-auto gap-8'>
                        <div className='overflow-hidden relative'>
                            <img className='hover:scale-110 duration-500' src={banner2} alt="" />
                            <div className='flex justify-center'>
                                <button className='absolute bottom-10 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>WATCHES</button>
                            </div>
                        </div>
                        <div className='overflow-hidden relative'>
                            <img className='hover:scale-110 duration-500' src={banner7} alt="" />
                            <div className='flex justify-center'>
                                <button className='absolute bottom-9 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>FOOTERWEAR</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col w-full lg:w-auto gap-8'>
                        <div className='overflow-hidden relative'>
                            <img className='hover:scale-100 duration-500' src={banner3} alt="" />
                            <div className='flex justify-center'>
                                <button className='absolute bottom-9 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>BAGS</button>
                            </div>
                        </div>
                        <div className='overflow-hidden relative'>
                            <img className='hover:scale-110 duration-500' src={banner5} alt="" />
                            <div className='flex justify-center'>
                                <button className='absolute bottom-10 bg-white px-4 lg:px-20 py-2 lg:py-4 opacity-95 text-sm lg:text-xl font-light shadow-lg text-black  hover:bg-orange-500 duration-500'>ACCESSORIES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=' carousel2 justify-around items-center'>
                <Tabs aria-label="Pills" style="pills" className=' text-center'>
                    <Tabs.Item active title="Old"  >
                        <div className='  tabs flex flex-row justify-evenly'>
                            {/* <p className="text-sm text-gray-500 dark:text-gray-400">Content 1</p> */}
                            <div className="flex flex-row  gap-5 flex-wrap  overflow-hidden">
                                <div  >
                                    <div className="h-70 w-[100%]  relative flex flex-col  items-center justify-center   ">
                                        <img src={item1} width={350} alt="" />
                                        <Button className='absolute rounded-full py-2 px-2 bg-gray-900  text-white hover:bg-red-600 ' onClick={() => setOpenModal(true)}>ADD TO CART</Button>
                                        <Modal className='' show={openModal} onClose={() => setOpenModal(false)}>
                                            <Modal.Header></Modal.Header>
                                            <Modal.Body>
                                                <div className="space-y-6">
                                                    <p className="text-base leading-relaxed text-black-500  dark:text-gray-400">
                                                        Boxy7 T-Shirt with Roll Sleeve

                                                    </p>
                                                    <p className="text-base leading-relaxed text-black-500 dark:text-gray-400">
                                                        is added to cart !
                                                    </p>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
                                                <Button color="red" className='rounded-full bg-red-600 flex justify-end text-white' onClick={() => setOpenModal(false)}>
                                                    ok
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>



                                    </div>

                                    <div className="p-3">
                                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row  gap-5 flex-wrap  overflow-hidden">
                                <div  >
                                    <div className="h-70 w-[100%]  relative flex flex-col  items-center justify-center   ">
                                        <img src={item2} width={350} alt="" />
                                        <Button className='absolute rounded-full py-2 px-2 bg-gray-900  text-white hover:bg-red-600 ' onClick={() => setOpenModal(true)}>ADD TO CART</Button>
                                        <Modal className='' show={openModal} onClose={() => setOpenModal(false)}>
                                            <Modal.Header></Modal.Header>
                                            <Modal.Body>
                                                <div className="space-y-6">
                                                    <p className="text-base leading-relaxed text-black-500 dark:text-gray-400">
                                                        Boxy7 T-Shirt with Roll Sleeve

                                                    </p>
                                                    <p className="text-base leading-relaxed text-black-500 dark:text-gray-400">
                                                        is added to cart !
                                                    </p>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
                                                <Button color="red" className='rounded-full bg-red-600 flex justify-end text-white' onClick={() => setOpenModal(false)}>
                                                    ok
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>



                                    </div>

                                    <div className="p-3">
                                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row  gap-5 flex-wrap  overflow-hidden">
                                <div  >
                                    <div className="h-70 w-[100%]  relative flex flex-col  items-center justify-center   ">
                                        <img src={item3} width={350} alt="" />
                                        <Button className='absolute rounded-full py-2 px-2 bg-gray-900  text-white hover:bg-red-600 ' onClick={() => setOpenModal(true)}>ADD TO CART</Button>
                                        <Modal className='' show={openModal} onClose={() => setOpenModal(false)}>
                                            <Modal.Header></Modal.Header>
                                            <Modal.Body>
                                                <div className="space-y-6">
                                                    <p className="text-base leading-relaxed text-black-500 dark:text-gray-400">
                                                        Boxy7 T-Shirt with Roll Sleeve

                                                    </p>
                                                    <p className="text-base leading-relaxed text-black-500 dark:text-gray-400">
                                                        is added to cart !
                                                    </p>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
                                                <Button color="red" className='rounded-full bg-red-600 flex justify-end text-white' onClick={() => setOpenModal(false)}>
                                                    ok
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>



                                    </div>

                                    <div className="p-3">
                                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row  gap-5 flex-wrap  overflow-hidden">
                                <div  >
                                    <div className="h-70 w-[100%]  relative flex flex-col  items-center justify-center   ">
                                        <img src={item4} width={350} alt="" />
                                        <Button className='absolute rounded-full py-2 px-2 bg-gray-900  text-white hover:bg-red-600 ' onClick={() => setOpenModal(true)}>ADD TO CART</Button>
                                        <Modal className='' show={openModal} onClose={() => setOpenModal(false)}>
                                            <Modal.Header></Modal.Header>
                                            <Modal.Body>
                                                <div className="space-y-6">
                                                    <p className="text-base leading-relaxed text-black-500 dark:text-gray-400">
                                                        Boxy7 T-Shirt with Roll Sleeve

                                                    </p>
                                                    <p className="text-base leading-relaxed text-black-500 dark:text-gray-400">
                                                        is added to cart !
                                                    </p>
                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                {/* <Button onClick={() => setOpenModal(false)}>I accept</Button> */}
                                                <Button color="red" className='rounded-full bg-red-600 flex justify-end text-white' onClick={() => setOpenModal(false)}>
                                                    ok
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>



                                    </div>

                                    <div className="p-3">
                                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Tabs.Item>
                    <Tabs.Item title="News">
                        <div className='flex flex-row justify-evenly'>
                            <p className="text-sm text-gray-500 dark:text-gray-400">NEW</p>
                            <div className="flex gap-5 flex-wrap  overflow-hidden">
                                <div>
                                    <img src={item5} width={350} alt="" />

                                    <div className="p-3">
                                        <p >Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-wrap  overflow-hidden">
                                <div>
                                    <img src={item6} width={350} alt="" />

                                    <div className="p-3">
                                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-wrap  overflow-hidden">
                                <div>
                                    <img src={item4} width={350} alt="" />
                                    <div className="p-3">
                                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-wrap  overflow-hidden">
                                <div>
                                    <img src={item7} width={350} alt="" />
                                    <div className="p-3">
                                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Sall">
                        <div className='flex flex-row justify-evenly'>
                            <p className="text-sm text-gray-500 dark:text-gray-400">SALL</p>
                            <div className="flex gap-5 flex-wrap  overflow-hidden">
                                <div>
                                    <img src={item1} width={350} alt="" />
                                    <div className="p-3">
                                        <p >Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-wrap  overflow-hidden">
                                <div>
                                    <img src={item2} width={350} alt="" />
                                    <div className="p-3">
                                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 flex-wrap  overflow-hidden">
                                <div>
                                    <img src={item3} width={350} alt="" />
                                    <div className="p-3">
                                        <p>Boxy1 T-Shirt with Roll Sleeve</p>
                                        <h3>$20.00</h3>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </Tabs.Item>
                    {/* <Tabs.Item title="Tab 4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Content 4</p>
                    </Tabs.Item> */}
                </Tabs>


            </section>

            <section className='deux image flex flex-lg-row gap-4 pl-[10%] pr-[10%] pt-[5%] pb-[5%] section3 ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <div className='shop hover:scale-110 overflow-hidden flex flex-col items-center text-white pt-[15%] gap-4 ' >
                    <h1>The Beauty <br />LOOKBOOK</h1>
                    <h6><a className='text-decoration-none  text-white ' href="">VIEW COLLECTION</a></h6>

                </div>
                <div className='shop2   items-center text-reset pt-[25%] flex flex-col   '>
                    <p>Boxy2 T-Shirt with Roll Sleeve</p>
                    <h6>$20.00</h6>

                </div>

            </section >
            <section className='card'>


                <h1 className='text-center pt-5'>OUR BLOG</h1>
                <div className='cartt'>
                    <div className=' flex flex-row gap-4 items-center justify-center  '>
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" className='cart' src={img1} />
                            <Card.Body>
                                <Card.Title>Black Friday Guide: Best Sales & Discount Codes</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                {/* <Button onClick={() => { navigate(`/service`) }} variant="primary">Go panier</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" className='cart' src={img2} />
                            <Card.Body>
                                <Card.Title>The White Sneakers Nearly Every Fashion Girls Own</Card.Title>
                                <Card.Text>
                                    Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque
                                    mattis augue id euismod. Inter-dum et...
                                </Card.Text>
                                {/* <Button onClick={() => { navigate(`/service`) }} variant="primary">Go panier</Button> */}
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" className='cart' src={img3} />
                            <Card.Body>
                                <Card.Title>New York SS 2018 Street Style: By Annina Mislin</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                {/* <Button onClick={() => { navigate(`/service`) }} variant="primary">Go panier</Button> */}

                            </Card.Body>
                        </Card>
                    </div>

                </div>



            </section>
            <section className=' dernier section pt-[10%]'>
                <h1 className='h1 text-center'>@ FOLLOW US ON INSTAGRAM</h1>
                <div className=''>

                    <div className='dernier'>


                        <div className='flex flex-lg-row   justify-evenly gap-4 '>
                            <div>
                                <h4>Free Delivery Worldwide</h4>
                                <p>Mirum est notare quam littera gothica</p>
                            </div>
                            <div>
                                <h4>30 Days Return</h4>
                                <p>Simply return it within 30 days for an exchange.</p>
                            </div>
                            <div>
                                <h4>Store Opening</h4>
                                <p>Shop open from Monday to Sunday</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};


import React, { useState } from 'react';
import item1 from "../../../assets/images/item-15.jpg"
import item2 from "../../../assets/images/item-13.jpg"
import item3 from "../../../assets/images/item-04.jpg"
import item4 from "../../../assets/images/item-10.jpg"
import item5 from "../../../assets/images/item-16.jpg"
import item6 from "../../../assets/images/item-12.jpg"
import item7 from "../../../assets/images/item-03.jpg"
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'flowbite-react';

export const SectionShop = () => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false);

    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState(0)



    const [myProduct, setMyProduct] = useState([
        {
            title: "Boxy1 T-Shirt with Roll Sleeve",
            price: "$200.00",
            image: item1
        },
        {
            title: "Boxy2 T-Shirt with Roll Sleeve",
            price: "$200.00",
            image: item2
        },
        {
            title: "Boxy3 T-Shirt with Roll Sleeve ",
            price: "$200.00",
            image: item3
        },
        {
            title: "Boxy1 T-Shirt with Roll Sleeve",
            price:"$250.00",
            image: item4
        },
        {
            title: "Boxy4 T-Shirt with Roll Sleeve",
            price: <del>$200.00</del>,
            image: item5
        },
        {
            title: "Boxy1 T-Shirt with Roll Sleeve",
            price: <del>$200.00</del>,
            image: item6
        },





    ])
  
    const [screenArray, setScreenArray] = useState(myProduct)
    const filterElement = (event) => {
        let newTab = screenArray.filter(element => element.title.toLowerCase().includes(event.target.value.toLowerCase()));
        setScreenArray(newTab)
    }






    return (
        <>


            <section className='sectionshop '>
                <div className="flex flex-row pl-[15%] items-center justify-around ">

                    <input onChange={(e) => setProductName(e.target.value)} value={productName} placeholder='  product' className='w-23 pt-1 outline-black outline' type="text" />
                    <input onChange={(e) => setProductPrice(e.target.value)} value={productPrice} placeholder=' Add Size' className='w-23 py-1 outline' type="number" />
                    <input onChange={(e) => filterElement(e)} placeholder='Insert name please' className='w-25 py-2  bg-transparent  outline outline-black focus:outline-sky-900' type="search" />

                    <p className='text-red-600'>Showing 1 to 6 of 8 items</p>

                </div>
                <div className=" h-[100vh] w-[100%]   flex flex-wrap justify-end  sectshop ">


                    {

                        screenArray.map((element, index) =>
                            <div key={index} className="h-[70vh] w-[calc(90%/3)] gap-2 flex flex-col  ">
                                <div  className="h-70 w-[100%]  relative flex flex-col  items-center justify-center    ">
                                    <img width={300} src={element.image} alt="" />

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
                                <div className=" flex flex-col items-center  justify-around h-30 ">
                                    <h3>{element.title}</h3>
                                    <p>{element.price}</p>
                                </div>
                            </div>
                        )


                    }
                </div>




            </section>



        </>
    );
};


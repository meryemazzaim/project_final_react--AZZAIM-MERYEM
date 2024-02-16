import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/images/icon-position-map-removebg-preview.png"
import logo2 from "../assets/images/icon-header-01.png"
import logo3 from "../assets/images/icon-header-02.png"
import { FaGripLinesVertical } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';


export const Header = () => {
    const [openModal, setOpenModal] =useState(false);

    const navigate = useNavigate()
    return (
        <>
            <Navbar expand="lg "  >

                <Container>
                    <img width={100} src={logo} alt="" className='flex justify-center pt-2' />

                    {/* <Navbar.Brand href="#home">My Channel</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className=" w-[100%] flex  justify-evenly items-center ">

                            <Nav.Link href="" onClick={() => { navigate(`/`) }} className='hover:bg-orange-400 rounded-full' ><span>Home</span> </Nav.Link>
                            <Nav.Link href="" onClick={() => { navigate(`/Shop`) }} > Shop</Nav.Link>
                            < Nav.Link href="" onClick={() => { navigate(`/contact`) }}> Contact </Nav.Link>
                            <Nav.Link href="" >Services</Nav.Link>
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


                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
                            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="#action/3.2">      Another action       </NavDropdown.Item> */}
                            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                            <NavDropdown.Divider />
                            {/* <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item> */}
                            {/* </NavDropdown> */}

                        </Nav>
                        {/* <div className='flex  flex-row w-[20%] f justify-around'>
                            <img width={15} src={logo2} alt="" />
                            <p >|</p>
                            <img width={15} src={logo3} alt="" />
                        </div> */}




                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}




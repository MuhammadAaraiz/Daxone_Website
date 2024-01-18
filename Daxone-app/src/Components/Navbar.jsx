import '../../src/App.css'
import React from 'react'
import Footer_image from "../assets/images/logo-1.webp"

const Navbar = () => {
    return <>
        <div className='container-fluid mb-2 maindivconatiner fixed-top p-2'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className=''>
                        <a className="navbar-brand" href="#"><img src={Footer_image} width="150" alt="" /></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item  p-2">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link active" aria-current="page" href="#">Shop</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link active" href="#">Mens</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link active" href="#">Pages</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link active" href="#">Blog</a>
                            </li>
                            <li className="nav-item p-2">
                                <a className="nav-link active" href="#">Contact</a>
                            </li>
                            <li className="nav-item p-2 ">
                                <a className="nav-link active" href="#"><i className="fa-solid fa-cart-shopping"></i> 2 items</a>
                            </li>
                            <li className="nav-item p-2 ">
                                <a className="nav-link active" href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
}

export { Navbar }
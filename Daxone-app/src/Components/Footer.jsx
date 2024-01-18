import '../../src/App.css'
import React from 'react'
import Footer_image from "../assets/images/logo-1.webp"

const Footer = () => {
    return <>
        <div className="container-fluid footer_color ">
            <footer className="footer p-5">
                <div className="footer-section">
                    <img src={Footer_image} className="mb-2" alt="" />
                    <p className="footerpara mt-2 mb-0">Follow us:</p>
                    <div className="icons mt-2">
                        <a href="#" className="icon p-2"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="icon p-2"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="icon p-2"><i className="fa-brands fa-google"></i></a>
                        <a href="#" className="icon p-2"><i className="fa-brands fa-pinterest-p"></i></a>
                    </div>
                </div>
                <div className="footer-section " >
                    <h6 className=" p-2">QUICK LINK</h6>
                    <ul className="icons  p-2">
                        <li><a href="#" className="icon">Shoping Cat</a></li>
                        <li><a href="#" className="icon">WIshlist</a></li>
                        <li><a href="#" className="icon">Chekout</a></li>
                        <li><a href="#" className="icon">Support</a></li>
                    </ul>
                </div>
                <div className="footer-section " >
                    <h6 className=" p-2">ABOUT US</h6>
                    <ul className="icons  p-2">
                        <li><a href="#" className="icon">About</a></li>
                        <li><a href="#" className="icon">Products</a></li>
                        <li><a href="#" className="icon">Terms and conditions</a></li>
                        <li><a href="#" className="icon">Help Center</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h6>NEWSLETTER</h6>
                    <p className="last_para mt-5">Subscribe to get all new updates</p>
                    <div className="last_inp2">
                        <input className="last_inp " type="email" size={35} placeholder="Enter your email " />
                        <i className="fa-solid fa-magnifying-glass "></i>
                    </div>
                </div>
            </footer>
        </div>
        <div className=" footer-bottom ">
            <p>Copyright © Daxone. All Right Reserved</p>
        </div>
    </>
}

export { Footer }
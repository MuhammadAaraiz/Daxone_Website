import '../../src/App.css'
import React from 'react'
import Div_image from "../assets/images/Div_image.webp"

const Image_div = () => {
    return <>
        <div className='container imagecontainer'>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 col-12 col-sm-6 imagediv">
                    <img width="100%" src={Div_image} className="imagediv d-block w-100" alt="" />
                </div>
                <div className="col-lg-6 col -md-6 col-12 col-sm-6 p-5 img_para" >
                    <h3 className='image_head1'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. </h3>
                    <h2 className='head21 mt-4'>Winter Discount <br /> Up to 30%</h2>
                    <p className='image_head mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <button className='gradient-button mt-2'>Shop Now </button>
                </div>
            </div>
        </div>
        <div>
        </div>
    </>
}


export { Image_div }
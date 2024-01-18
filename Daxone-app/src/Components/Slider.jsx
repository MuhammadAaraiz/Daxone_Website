import React from 'react'
import '../../src/App.css'
import first_slider  from "../assets/images/First_slider.webp"
import Second_slider from "../assets/images/Scnd_slider.webp"

const Slider = () => {
    return <>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='container-fluid firstcontainer'>
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6 col-12 col-sm-6">
                                <img width="100%" src={first_slider}  className=" d-block w-100" alt="" />
                            </div>
                            <div className="col-lg-7 col -md-6 col-12 col-sm-6 " >
                                <h3 className='head1'>30% Off </h3>
                                <h1 className='head2'>Comfort Chair</h1>
                                <p className='para'>Collect from Daxone & get 30% Discount</p>
                                <button className='gradient-button'>Shop Now </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='container-fluid firstcontainer'>
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6 col-12 col-sm-6">
                                <img width="100%" src={Second_slider} className="d-block w-100" alt="" />
                            </div>
                            <div className="col-lg-7 col -md-6 col-12 col-sm-6 " >
                                <h3 className='head1'>30% Off </h3>
                                <h1 className='  head2'>Comfort Chair</h1>
                                <p className=' para'>Collect from Daxone & get 30% Discount</p>
                                <button className='gradient-button'>Shop Now </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev"><i className="fa-solid fa-arrow-left fa-2xl arrow_color"></i>
                <span className="carousel-control-prev-icon visually-hidden" ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next"><i className="fa-solid fa-arrow-right fa-2xl arrow_color2"></i>
                <span className="carousel-control-next-icon visually-hidden"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
}
export { Slider }
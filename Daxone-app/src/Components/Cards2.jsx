import React from 'react'
import '../../src/App.css'
import Fifth_Card from "../assets/images/Fifth_card.webp"
import Sixth_Card from "../assets/images/Sixth_card.webp"
import Seventh_card from "../assets/images/Seventh_card.webp"
import Eight_card from "../assets/images/Eight_card.webp"


const Cardsmain2 = (props) => {
    return <>
        <div className='container'>
            <div className="row ">
                <div className="col-sm-3">
                    <div className="card">
                        <span htmlFor="" className={props.className}>{props.span}   </span>
                        <img src={Fifth_Card} className="card-img-top" alt="..." />
                        <div className="card-body ">
                            <p className="card-title mt-2 mb-0">Chair</p>
                            <p className="card-text mb-0">Golden Easy Spot Chair</p>
                            <p htmlFor="" className="cards-text mt-1">{props.p1} <s>{props.s} </s></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <img src={Sixth_Card} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title mt-2 mb-0">Chair</p>
                            <p className="card-text mb-0">Golden Easy Spot Chair</p>
                            <p htmlFor="" className="cards-text mt-1">{props.p}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <span className='paragraph23'>New</span>
                        <img src={Seventh_card} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title mt-2 mb-0">Chair</p>
                            <p className="card-text mb-0">Golden Easy Spot Chair</p>
                            <p htmlFor="" className="cards-text mt-1">{props.p3} <s>{props.s1} </s></p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card">
                        <img src={Eight_card} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-title mt-2 mb-0">Chair</p>
                            <p className="card-text mb-0">Golden Easy Spot Chair</p>
                            <p htmlFor="" className="cards-text mt-1">$280.00</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}
export { Cardsmain2 }
import React from 'react'
import '../../src/App.css'
import First_Card from "../assets/images/First_card.webp"
import Second_Card from "../assets/images/Scnd_card.webp"
import Third_Card from "../assets/images/Third_card.webp"
import Fourth_Card from "../assets/images/Fourth_Card.webp"

const Cardsmain = (props) => {
  return <>
    <div className='container'>
      <div className="row ">
        <div className="col-sm-3">
          <div className="card">
            <img src={First_Card} className="card-img-top" alt="..." />
            <div className="card-body ">
              <p className="card-title mt-2 mb-0">Chair</p>
              <p className="card-text mb-0">Golden Easy Spot Chair</p>
              <p className="cards-text mt-1">$210.00</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <span className='paragraph23'  >-30%</span>
            <img src={Second_Card} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title mt-2 mb-0">Chair</p>
              <p className="card-text mb-0">Golden Easy Spot Chair</p>
              <p htmlFor="" className="cards-text mt-1">{props.p} <s>{props.s} </s></p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <span htmlFor="" className={props.className}>{props.span}   </span>
            <img src={Third_Card} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title mt-2 mb-0">Chair</p>
              <p className="card-text mb-0">Golden Easy Spot Chair</p>
              <p htmlFor="" className="cards-text mt-1"> {props.p2} </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card">
            <span className='paragraph23'  >New</span>
            <img src={Fourth_Card} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-title mt-2 mb-0">Chair</p>
              <p className="card-text mb-0">Golden Easy Spot Chair</p>
              <p htmlFor="" className="cards-text mt-1">{props.p3} <s>{props.s2} </s></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}



export { Cardsmain }
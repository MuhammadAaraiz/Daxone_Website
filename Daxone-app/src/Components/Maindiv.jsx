import React from 'react';
import '../../src/App.css'
import { Cardsmain } from './Cards';
import { Image_div } from './Imagediv';
import { Slider } from './Slider';
import { Para_div } from './Headings';
import { Cardsmain2 } from './Cards2';
import { Navbar } from './Navbar';
import { Footer } from './Footer';









function Maindiv() {
  return (
    <>
      <div className='mainfile_div'>
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Slider />
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <Para_div h1="Best Sell"
        p="Lorem Ipsum has been the industry's standard dummy text" />
      <br />
      <Cardsmain
        span="Stock Out"
        className="paragraph"
        s="$230.00"
        p="$210.00"
        p2="$250.00"
        p3="$320.00"
        s2="$120.00"
      />
      <br />
      <br />
      <br />
      <Image_div />
      <br />
      <br />
      <br />
      <Para_div h1="All Products"
        p="Lorem Ipsum has been the industry's standard dummy text" />
      <br />
      <br />
      <br />
      <Cardsmain
        p="$250.00"
        s="$270.00"
        p2="$200.00"
        p3="$220.00"
      />
      <Cardsmain2
        span="Stock Out"
        className="paragraph"
        p="$260.00"
        p1="$250.00"
        s=" $260.00"
        p2=" $260.00"
        p3="$240.00"
        s1=" $290.00"
      />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  )
}

export { Maindiv }
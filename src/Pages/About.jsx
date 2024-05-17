import React from 'react'
import eight from "./images/08.png"
import video from "./images/v01.mp4"
import pill from "./images/pills-384846_1280.jpg"
import dns from "./images/dna.mp4"
import size from "./images/ai-generated-7847781_1280.jpg"
import "./Styling/about.css"
const About = () => {
  return (
    <div id='main-about'>

<div className="background-img">

      <video src={dns} controls loop autoPlay muted   className="image" />
        <div className="text-overlay">

<p >Welcome to <span>Aun Herbal</span>, where nature meets wellness. We are passionate about harnessing the power of nature to promote health and vitality through our range of herbal products.

At Aun Herbal, we believe in the healing potential of plants and their ability to support our well-being in a holistic way. Our journey into herbalism began with a deep respect for traditional knowledge and a desire to offer natural alternatives for modern health concerns.
Herbal medicine has been practiced for centuries across cultures worldwide, drawing upon the wisdom of our ancestors and the bountiful gifts of the earth. We honor this rich tradition by carefully selecting and formulating our products to deliver the purest and most potent botanical extracts.

</p>
</div>



</div>
<div className='about-product'>
<img className='auns-img' src={size} alt='aunherbal' />
<p className='about-product-p'>
Our range of herbal products spans a variety of categories, including skincare, dietary supplements, aromatherapy, and more. Whether you're looking to nourish your skin with botanical-infused creams and serums, enhance your wellness routine with herbal supplements, or create a soothing sanctuary with aromatherapy blends, we have something for everyone.

Quality and safety are at the forefront of everything we do. 
</p>
</div>


<div className='video1'>

<video src={video} controls loop autoPlay muted    ></video>
<div className="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3223065920733!2d77.37523507383649!3d28.6201007846481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce55f5d03b1dd%3A0x61177597ddbda5ab!2sA-142%2C%20Sector%2063%20Rd%2C%20A%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1714045434203!5m2!1sen!2sin"
        
       
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
    </div>
  )
}

export default About
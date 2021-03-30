import React from 'react';
import './Home.css';
import Product from './Product';
import Slider from './Slider';
import { ImageSlider } from './ImageSlider';
function Home() {


  return (
    <div className="home">
      <div className="home__container">
    <Slider slides={ImageSlider} />
    
        <div className="home__row">
          <Product
            id="12321341"
            title="Fire TV Cube | Hands-free streaming device with Alexa | 4K Ultra HD | 2019 release"
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41fziVetM7L._AC_UY218_.jpg"
          />         
          <Product
            id="12321341"
            title="External Hard Drive, 1TB Portable Hard Drive External USB 3.1 HDD for PC, Laptop and Mac (1TB, Silver)"
            price={48.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71dFDnHR1sL._AC_UY218_.jpg"
          /> 
        </div>
        <div className="home__row">
           <Product
            id="3254354345"
            title="Panasonic HC-X1 4K Ultra HD Professional Camcorder (Black)"
            price={249.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81KVhTzeSiL._AC_UL320_.jpg"
          />
          <Product
            id="4903850"
            title="Logitech BRIO Ultra HD Webcam for Video Conferencing and Recording."
            price={183.51}
            rating={5}
            image="https://m.media-amazon.com/images/I/615PHGxiucL._AC_UY218_.jpg"
          />     
         
          <Product
            id="23445930"
            title="Samsung Chromebook XE303C12-A01 11.6-inch,2GB RAM, 16GB SSD"
            price={155.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/81GZbsQ0TkL._AC_UY218_.jpg"
          />
        </div>
      
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
           <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="4903850"
            title="Sony SmartWatch US version 1 Android Bluetooth USB Retail Box"
            price={189}
            rating={4}
            image="https://m.media-amazon.com/images/I/51DUWZjap2L._AC_UY218_.jpg"
          />     
         
          <Product
            id="23445930"
            title="Sony Compact and Portable Waterproof Wireless Speaker."
            price={58.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/51kQntfQvPL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="49538094"
            title="Samsung Galaxy S20+ 5G 128GB Fully Unlocked Smartphone (Renewed)"
            price={159.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71C4k+Ej67L._AC_UY218_.jpg"
          />
          
          <Product
            id="99903850"
            title="Sony WHXB900 Extra Bass Wireless Noise Cancelling Headphones"
            price={174.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81IRb2rhIML._AC_UY218_.jpg"
          />
           <Product
            id="903850"
            title="Ring Stick Up Cam Battery HD security camera."
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/41Hc4IGGzdL._AC_UL320_.jpg"
          />         
        </div> 
          
        
      </div>
      
    </div>
    

   
  );
}

export default Home;

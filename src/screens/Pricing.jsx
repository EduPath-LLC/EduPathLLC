import React from 'react';

import PricingBox from '../components/PricingBox';
import Navbar from "../components/Navbar";
import '../styles/Pricing.css';

function Pricing() {
  return (
    <>      
      <div className='total'>

        <Navbar />

        <h1 className='priceTitle'> Find the Right Plan for </h1>

        <div className='priceBoxesContainer'>
          <PricingBox />
        </div>

      </div>
    </>
  );
}

export default Pricing;
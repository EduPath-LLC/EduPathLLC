import React from 'react';
import '../styles/PricingBox.css';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function PricingBox() {
    return(
        <>
        <div className='boxContainer'>
            <div className="pricingBox">
                <div className='card'>
                    <div className='card-content'>
                        <h3>Small School (&lt;500)</h3>
                        <p><strong>Tier 1 (Map Only):</strong> $2,000/year</p>
                        <p><strong>Tier 2 (Tier 1 + Website + Availability):</strong> $4,000/year</p>
                        <p><strong>Tier 3 (Tier 2 + Events):</strong> $6,000/year</p>
                        <div className='buttonsPrices'>
                            <button className='frontButtonPrices' onClick={() => navigate('/demo')}>
                                <p> Learn More </p>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pricingBox">
            <div className='card'>
                    <div className='card-content'>
                        <h3>Medium School (500 - 1000)</h3>
                        <p><strong>Tier 1 (Map Only):</strong> $3,000/year</p>
                        <p><strong>Tier 2 (Tier 1 + Website + Availability):</strong> $6,000/year</p>
                        <p><strong>Tier 3 (Tier 2 + Events):</strong> $9,000/year</p>
                        <div className='buttonsPrices'>
                            <button className='frontButtonPrices' onClick={() => navigate('/demo')}>
                                <p> Learn More </p>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricingBox">
            <div className='card'>
                    <div className='card-content'>
                    <h3>Large School (1000 - 2500)</h3>
                    <p><strong>Tier 1 (Map Only):</strong> $5,000/year</p>
                    <p><strong>Tier 2 (Tier 1 + Website + Availability):</strong> $9,000/year</p>
                    <p><strong>Tier 3 (Tier 2 + Events):</strong> $12,000/year</p>
                        <div className='buttonsPrices'>
                            <button className='frontButtonPrices' onClick={() => navigate('/demo')}>
                                <p> Learn More </p>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default PricingBox;
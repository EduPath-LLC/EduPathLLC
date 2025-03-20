import React from 'react';
import '../styles/PricingBox.css';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import whiteCheckmark from '../assets/whiteCheckmark.png'


function PricingBox() {

    const navigate = useNavigate();

    return(
        <>
        <div className='boxContainer'>
            <div className="pricingBox">
                <div className='card'>
                    <div className='card-content'>
                        <h3>Small School (&lt;500)</h3>
                        <h4><strong>Tier 1:</strong> $2,000/year</h4>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Map</p>
                        </div>
                        <h4><strong>Tier 2:</strong> $4,000/year</h4>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>All Tier 1 Perks</p>
                        </div>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Website</p>
                        </div>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Availability</p>
                        </div>
                        <h4><strong>Tier 3:</strong> $6,000/year</h4>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>All Tier 2 Perks</p>
                        </div>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Events</p>
                        </div>
                        <div className='buttonsPrices'>
                            <button className='frontButtonPrices' onClick={() => navigate('/demo')}>
                                <p> Learn More </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pricingBox">
            <div className='card'>
                    <div className='card-content'>
                        <h3>Medium School (500 - 1000)</h3>
                        <h4><strong>Tier 1:</strong> $3,000/year</h4>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Map</p>
                        </div>
                        <h4><strong>Tier 2:</strong> $6,000/year</h4>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>All Tier 1 Perks</p>
                        </div>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Website</p>
                        </div>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Availability</p>
                        </div>
                        <h4><strong>Tier 3:</strong> $9,000/year</h4>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>All Tier 2 Perks</p>
                        </div>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Events</p>
                        </div>
                        <div className='buttonsPrices'>
                            <button className='frontButtonPrices' onClick={() => navigate('/demo')}>
                                <p> Learn More </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricingBox">
            <div className='card'>
                    <div className='card-content'>
                    <h3>Large School (1000 - 2500)</h3>
                    <h4><strong>Tier 1:</strong> $5,000/year</h4>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Map</p>
                        </div>
                        <h4><strong>Tier 2:</strong> $9,000/year</h4>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>All Tier 1 Perks</p>
                        </div>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Website</p>
                        </div>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Availability</p>
                        </div>
                        <h4><strong>Tier 3:</strong> $12,000/year</h4>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>All Tier 2 Perks</p>
                        </div>
                        <div className='perkContainer'>
                            <img src={whiteCheckmark} alt="Checkmark" className='logoPrice' onClick={() => {navigate('/')}} />
                            <p>Events</p>
                        </div>
                        <div className='buttonsPrices'>
                            <button className='frontButtonPrices' onClick={() => navigate('/demo')}>
                                <p> Learn More </p>
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
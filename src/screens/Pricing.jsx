import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import '../styles/Pricing.css';

function Pricing() {
  const navigate = useNavigate(); 

  return (
    <>      
      <div className='total'>

        <Navbar />

        <h1 className='priceTitle'> Find the Right Plan for you.</h1>

        <div className="priceBoxesContainer">
          <div className="priceBox">
            <h2>Tier I</h2>
            <div className="price">
              <span className="dollar">$</span>
              <span className="amount">1</span>
              <span className="per">Per Student</span>
            </div>
            <p className="desc"> Basic Plan for Map Use</p>
            <p className="validity">Valid for 12 months</p>
            <button className="subscribe" onClick={() => navigate('/contactus')}>Learn More</button>
            <ul className="features">
              <li>→ Access to Custom Map of School</li>
              <li>→ Access to all the Safety features</li>
              <li>→ Student Schedules Integrated</li>
            </ul>
          </div>

          <div className="priceBox highlighted">
            <div className="tag">Recommended</div>
            <h2>Tier II</h2>
            <div className="price">
              <span className="dollar">$</span>
              <span className="amount">1.50</span>
              <span className="per">Per Student</span>
            </div>
            <p className="desc">Ideal for Schools Looking for Control</p>
            <p className="validity">Valid for 12 months</p>
            <button className="subscribe highlight" onClick={() => navigate('/contactus')}>Learn More</button>
            <ul className="features">
              <li>→ Everything Offered in Tier I</li>
              <li>→ Online Website for Students</li>
              <li>→ School Wide Communication</li>
              <li>→ One Custom Feature</li>
            </ul>
          </div>

          <div className="priceBox">
            <h2>Tier III</h2>
            <div className="price">
              <span className="dollar">$</span>
              <span className="amount">2</span>
              <span className="per">Per Student</span>
            </div>
            <p className="desc">Perfect for Schools Looking for Total Control</p>
            <p className="validity">Valid for 12 months</p>
            <button className="subscribe" onClick={() => navigate('/contactus')}>Learn More</button>
            <ul className="features">
              <li>→ Everything in Tier II</li>
              <li>→ Hallway/Restroom Passes</li>
              <li>→ 3 Custom Features</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
import React from 'react';
import Particles from '../components/Particles';
import '../styles/discount.css';

const Discount = () => {
  return (
    <div className="discount-page">
      <div className="particles-background">
        <Particles
          particleColors={['#d4af37', '#b78f28']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      
      <div className="discount-content">
        <div className="discount-container">
          <h1 className="discount-title">Special Offers</h1>
          
          <div className="offer-card contingent-leader">
            <div className="offer-header">
              <h2 className="offer-title">Contingent Leader</h2>
              <div className="offer-badge">FREE</div>
            </div>
            
            <div className="offer-content">
              <div className="offer-highlight">
                <h3>Win FREE ACCOMMODATION at IIT Jodhpur</h3>
                <p className="highlight-text">+ JODHPUR CITY TOUR</p>
              </div>
              
              <div className="requirements">
                <h4>Requirements:</h4>
                <ul>
                  <li>Bring <span className="highlight">15 registrations</span> to Varchas'24 website</li>
                  <li>Bring <span className="highlight">15 accommodations</span> to Varchas'24 Sports fest</li>
                  <li>Register at least <span className="highlight">20 students</span> along with accommodation</li>
                </ul>
              </div>
              
              <div className="deliverables">
                <h4>Deliverables:</h4>
                <div className="deliverables-list">
                  <div className="deliverable-item">
                    <span className="deliverable-text">FREE Accommodation</span>
                  </div>
                  <div className="deliverable-item">
                    <span className="deliverable-text">Food</span>
                  </div>
                  <div className="deliverable-item">
                    <span className="deliverable-text">Pronite Passes</span>
                  </div>
                  <div className="deliverable-item">
                    <span className="deliverable-text">Jodhpur City TOUR</span>
                  </div>
                </div>
              </div>
              
              <div className="conditions">
                <h4>Important Conditions:</h4>
                <ul>
                  <li>Contingent leader and registrations must be students (UG/PG) of a registered College/University</li>
                  <li>All participants must provide legal documents and valid student ID proof</li>
                  <li className="warning">⚠️ Fine of Rs.12,000 if any participant fails to provide required documents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
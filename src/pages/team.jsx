import React from 'react';
import ProfileCard from '../components/ProfileCard';
import '../styles/ProfileCard.css';
import teamMembers from '../../data.json';


function Team() {
  const handleContactClick = (memberName) => {
    console.log(`Contacting ${memberName}`);
    // Add your contact logic here
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#000',
      padding: '2rem 0',
      overflowX: 'hidden',
      width: '100%'
    }}>
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '3rem',
        padding: '0 2rem'
      }}>
        <h1 style={{ 
          color: '#D4AF37', 
          fontSize: '3rem', 
          fontWeight: '700',
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          OUR TEAM
        </h1>
        <p style={{ 
          color: '#ccc', 
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Meet the dedicated individuals behind VARCHAS 2025. 
          Our passionate team works tirelessly to bring you the best sports experience.
        </p>
      </div>
      
      <div className='team-grid-container' 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
        gap: '5rem',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            title={member.title}
            handle={member.handle}
            status={member.status}
            avatarUrl={member.avatarUrl}
            iconUrl={member.iconUrl}
            contactText={member.contactText}
            onContactClick={() => handleContactClick(member.name)}
            enableTilt={true}
            showUserInfo={true}
            className="team-card"
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
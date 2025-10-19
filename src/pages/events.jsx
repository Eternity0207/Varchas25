import React from 'react';
import { ChromaGrid } from '../components/ChromaGrid';
import '../styles/ChromaGrid.css';

const eventsData = [
  {
    image: '/images/image1.jpg',
    title: 'Cricket',
    subtitle: 'The Gentleman\'s Game',
    description: 'Experience the thrill of cricket with our competitive tournament featuring teams from across the nation. Show your skills in this prestigious sport.',
    borderColor: '#4F46E5',
    gradient: 'linear-gradient(145deg, #4F46E5, #000)',
    ruleBookUrl: '/rules/cricket.pdf',
    registerUrl: '/register/cricket'
  },
  {
    image: '/images/image2.jpg',
    title: 'Football',
    subtitle: 'The Beautiful Game',
    description: 'Join the most exciting football tournament with professional referees and amazing prizes. Team up and compete for glory.',
    borderColor: '#10B981',
    gradient: 'linear-gradient(210deg, #10B981, #000)',
    ruleBookUrl: '/rules/football.pdf',
    registerUrl: '/register/football'
  },
  {
    image: '/images/image3.jpg',
    title: 'Basketball',
    subtitle: 'Fast-Paced Action',
    description: 'Dunk your way to victory in our high-energy basketball championship. Show your skills on the court.',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(165deg, #F59E0B, #000)',
    ruleBookUrl: '/rules/basketball.pdf',
    registerUrl: '/register/basketball'
  },
  {
    image: '/images/image4.jpg',
    title: 'Badminton',
    subtitle: 'Precision & Speed',
    description: 'Showcase your badminton skills in singles and doubles categories. Quick reflexes and precision shots required.',
    borderColor: '#EF4444',
    gradient: 'linear-gradient(195deg, #EF4444, #000)',
    ruleBookUrl: '/rules/badminton.pdf',
    registerUrl: '/register/badminton'
  },
  {
    image: '/images/image5.jpg',
    title: 'Table Tennis',
    subtitle: 'Lightning Fast',
    description: 'Quick reflexes and precision shots in our table tennis championship. Test your speed and accuracy.',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
    ruleBookUrl: '/rules/table-tennis.pdf',
    registerUrl: '/register/table-tennis'
  },
  {
    image: '/images/image6.jpg',
    title: 'Athletics',
    subtitle: 'Track & Field',
    description: 'Sprint, jump, and throw your way to glory in various track and field events. Multiple disciplines available.',
    borderColor: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4, #000)',
    ruleBookUrl: '/rules/athletics.pdf',
    registerUrl: '/register/athletics'
  }
];

function Events() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#000',
      padding: '2rem 0'
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
          SPORTS EVENTS
        </h1>
        <p style={{ 
          color: '#ccc', 
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Join the most exciting sports competitions and showcase your athletic prowess. 
          Register now and be part of the legacy!
        </p>
      </div>
      
      <ChromaGrid 
        items={eventsData}
        columns={3}
        rows={2}
        radius={300}
        className="events-grid"
      />
    </div>
  );
}

export default Events;

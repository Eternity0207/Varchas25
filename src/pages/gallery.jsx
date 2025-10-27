import React, { useEffect } from 'react';
import InfiniteMenu from '../components/InfiniteMenu'

const items = [
  {
    image: '/images/image1.jpg',
    link: 'https://google.com/',
    title: 'Varchas 2025',
    description: 'Capturing the spirit of excellence'
  },
  {
    image: '/images/image2.jpg',
    link: 'https://google.com/',
    title: 'Athletic Excellence',
    description: 'Where champions compete'
  },
  {
    image: '/images/image3.jpg',
    link: 'https://google.com/',
    title: 'Victory Moments',
    description: 'Celebrating triumph and glory'
  },
  {
    image: '/images/image4.jpg',
    link: 'https://google.com/',
    title: 'Sportsmanship',
    description: 'Uniting athletes from across the nation'
  },
  {
    image: '/images/image5.jpg',
    link: 'https://google.com/',
    title: 'Competition Arena',
    description: 'Where legends are born'
  },
  {
    image: '/images/image6.jpg',
    link: 'https://google.com/',
    title: 'Varchas Legacy',
    description: 'Continuing the tradition of excellence'
  }
];

function Gallery() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }}>
      <InfiniteMenu items={items} />
    </div>
  );
}

export default Gallery;
import React, { useEffect } from 'react';
import InfiniteMenu from '../components/InfiniteMenu'

const items = [
  {
    image: '/images/image1.jpg',
    link: 'https://google.com/'
  },
  {
    image: '/images/image2.jpg',
    link: 'https://google.com/'
  },
  {
    image: '/images/image3.jpg',
    link: 'https://google.com/'
  },
  {
    image: '/images/image4.jpg',
    link: 'https://google.com/'
  },
  {
    image: '/images/image5.jpg',
    link: 'https://google.com/'
  },
  {
    image: '/images/image6.jpg',
    link: 'https://google.com/'
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
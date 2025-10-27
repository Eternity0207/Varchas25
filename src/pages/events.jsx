import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/events.css";

const Events = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const events = [
    {
      id: 1,
      name: "Basketball Championship",
      description: "Compete in the ultimate basketball showdown with teams from across the nation",
      image: "/images/image1.jpg",
      registerLink: "#",
      rulebookLink: "#"
    },
    {
      id: 2,
      name: "Football Cup",
      description: "Show your skills in the most awaited football tournament of the year",
      image: "/images/image2.jpg",
      registerLink: "#",
      rulebookLink: "#"
    },
    {
      id: 3,
      name: "Table Tennis Masters",
      description: "Fast-paced action and precision play in our premier table tennis competition",
      image: "/images/image3.jpg",
      registerLink: "#",
      rulebookLink: "#"
    },
    {
      id: 4,
      name: "Cricket League",
      description: "Experience the thrill of competitive cricket at its finest",
      image: "/images/image4.jpg",
      registerLink: "#",
      rulebookLink: "#"
    },
    {
      id: 5,
      name: "Badminton Tournament",
      description: "Showcase your agility and technique in this elite badminton championship",
      image: "/images/image5.jpg",
      registerLink: "#",
      rulebookLink: "#"
    },
    {
      id: 6,
      name: "Volleyball Championship",
      description: "Team up and spike your way to victory in this exciting tournament",
      image: "/images/image6.jpg",
      registerLink: "#",
      rulebookLink: "#"
    },
    {
      id: 7,
      name: "Chess Masters",
      description: "Test your strategic mind in our premier chess championship",
      image: "/images/image1.jpg",
      registerLink: "#",
      rulebookLink: "#"
    },
    {
      id: 8,
      name: "Esports Arena",
      description: "Digital warriors compete for glory in the ultimate gaming championship",
      image: "/images/image2.jpg",
      registerLink: "#",
      rulebookLink: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="events-page">
      <motion.div
        className="events-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Our Events</h1>
        <p>Join us for thrilling competitions and unforgettable experiences</p>
      </motion.div>

      <motion.div
        className="events-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="event-card"
            variants={itemVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="event-image-container">
              <img src={event.image} alt={event.name} />
              <div className="event-overlay" />
              <motion.div
                className="event-number"
                initial={{ scale: 0, rotate: -180 }}
                whileHover={{ scale: 1.2, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>
            </div>

            <div className="event-content">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {event.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {event.description}
              </motion.p>

              <div className="event-buttons">
                <motion.a
                  href={event.registerLink}
                  className="btn btn-register"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register
                </motion.a>
                <motion.a
                  href={event.rulebookLink}
                  className="btn btn-rulebook"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(255, 255, 255, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rule Book
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="events-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p>Ready to compete? Choose your event and make your mark!</p>
      </motion.div>
    </div>
  );
};

export default Events;

import { motion } from "framer-motion";
import EventCard from "../components/EventCard";
import "../styles/events.css";

const Events = () => {
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
            variants={itemVariants}
            style={{ height: "100%" }}
          >
            <EventCard
              imageUrl={event.image}
              eventName={event.name}
              description={event.description}
              eventNumber={index + 1}
              registerLink={event.registerLink}
              rulebookLink={event.rulebookLink}
              enableTilt={true}
            />
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

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
      rulebookLink: "https://drive.google.com/file/d/18DCApxGztjt-J4ngdulxLpawqg7UcJxf/view?usp=drive_link"
    },
    {
      id: 2,
      name: "Football Cup",
      description: "Show your skills in the most awaited football tournament of the year",
      image: "/images/image2.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/1hQTgcJGdF1JDkIKInB-QPbLsT9jEM1qU/view?usp=drive_link"
    },
    {
      id: 3,
      name: "Table Tennis Masters",
      description: "Fast-paced action and precision play in our premier table tennis competition",
      image: "/images/image3.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/1pztULRv3YDNIzbXPfiYocotAOkRgurH_/view?usp=drive_link"
    },
    {
      id: 4,
      name: "Cricket League",
      description: "Experience the thrill of competitive cricket at its finest",
      image: "/images/image4.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/1yoDZOWrd7WzopL2-dMHSi4NYFLz_zQku/view?usp=drive_link"
    },
    {
      id: 5,
      name: "Badminton Tournament",
      description: "Showcase your agility and technique in this elite badminton championship",
      image: "/images/image5.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/11S4c5V7dcG_B6NmQEYslLBq4fTEIm8Zf/view?usp=drive_link"
    },
    {
      id: 6,
      name: "Volleyball Championship",
      description: "Team up and spike your way to victory in this exciting tournament",
      image: "/images/image6.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/1mfpwn0RvoBJSF9qCGUA4Gfo_s8UntC0Q/view?usp=drive_link"
    },
    {
      id: 7,
      name: "Chess Masters",
      description: "Test your strategic mind in our premier chess championship",
      image: "/images/image1.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/1z_vuBiEl6uMQKteXBkj3ht_17KsNu7C_/view?usp=drive_link"
    },
    {
      id: 8,
      name: "BGMI Esports",
      description: "Battle it out in the ultimate mobile gaming championship",
      image: "/images/image2.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/1zVY2SGrjY4_bl3vW3plIz1KQnQWdlGDa/view?usp=drive_link"
    },
    {
      id: 9,
      name: "Hockey Championship",
      description: "Experience the fast-paced action of competitive hockey",
      image: "/images/image3.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/13n14h6KG4mLeSoO9DFFUYcTC-EX_exU9/view?usp=drive_link"
    },
    {
      id: 10,
      name: "Kabaddi Tournament",
      description: "Show your strength and strategy in this traditional sport",
      image: "/images/image4.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/1GGnpTPhh5DM94Wm1h1YTi1x0zKRHvjEn/view?usp=drive_link"
    },
    {
      id: 11,
      name: "Powerlifting Championship",
      description: "Test your raw strength in this ultimate powerlifting competition",
      image: "/images/image5.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/1JnIXBTBnEj-GQOLKn3XqWn7rvvEY6lau/view?usp=drive_link"
    },
    {
      id: 12,
      name: "Squash Championship",
      description: "Fast-paced indoor racquet sport competition for skilled players",
      image: "/images/image6.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/1zQMxa1dahG_MZVJaSRSf4iLvjrYqcXqk/view?usp=drive_link"
    },
    {
      id: 13,
      name: "Free Fire Esports",
      description: "Battle royale competition in the popular mobile game",
      image: "/images/image1.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/17lIRTnKMqe22Uxt9qwD9b9x7h4LqfgZP/view?usp=drive_link"
    },
    {
      id: 14,
      name: "Athletics Championship",
      description: "Show your speed, strength, and endurance in track and field events",
      image: "/images/image2.jpg",
      registerLink: "#",
      rulebookLink: "https://drive.google.com/file/d/15AcMKmCezNgN5o-gh7OAkZjDoIY5LlRP/view?usp=drive_link"
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

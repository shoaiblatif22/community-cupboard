import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Packages from "../Packages/packages";
import GetInvolved from '../getInvolved/getInvolved';
import ContactUs from '../contactUs/ContactUs';
import './Home.css';
import Testimonials from "../testimonials/testimonials";

const Home = () => {
  const controls = useAnimation();
  const sectionVariants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -20,
    },
  };

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (aboutInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, aboutInView]);

  return (
    <main>
      <motion.div
        className="about-container"
        ref={aboutRef}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to Community Cupboard!</h1>
        <p>
          At Community Cupboard, we believe in the power of compassion and the strength of community. Our mission is to make a positive impact on the lives of those in need by providing a helping hand and nourishing their spirits.
        </p>
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2>Our Story:</h2>
        <p>
          Community Cupboard was born out of a shared vision among a group of passionate individuals who wanted to address the challenges faced by those who struggle to access essential resources, such as food, from food banks. We saw an opportunity to create a bridge between the generous resources available at the food bank and those who could benefit from them but face difficulties in accessing them due to various circumstances.
        </p>
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2>Our Purpose:</h2>
        <p>
          We understand that life's circumstances can sometimes make it challenging to collect packages from a food bank, whether it's due to physical limitations, vulnerability, or work commitments. That's where we come in. Our purpose is to connect the caring hearts of our community members with those in need, creating a network of support that fosters a sense of belonging and empowerment.
        </p>
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2>How It Works:</h2>
        <p>
          Community Cupboard operates on a simple principle - volunteers from the community step up to lend a hand. If you need assistance in collecting a food package, our compassionate volunteers will be there to help. They will not only deliver the package to your doorstep but will also unpack the goods for you, ensuring you receive the care and attention you deserve.
        </p>
      </motion.div>

      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h2>Join Our Community:</h2>
        <p>
          Whether you are someone in need of support or a community member looking to make a difference, there's a place for you at Community Cupboard. Together, we can build a stronger, more caring community where no one feels alone or goes hungry.
        </p>
      </motion.div>

      <Packages />
      <GetInvolved />
      <Testimonials />
      <ContactUs />
    </main>
  );
};

export default Home;

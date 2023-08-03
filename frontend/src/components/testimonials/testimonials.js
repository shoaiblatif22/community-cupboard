// testimonials.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    date: "August 12, 2023",
    review:
      "I cannot thank this food bank enough for the incredible support they provide. As a disabled senior, getting groceries on my own was becoming increasingly difficult. The delivery service they offer is a true blessing! The volunteers are so kind and always go the extra mile to make sure I receive everything I need. The packed food packages are filled with love and care, and I'm grateful for the nourishment they bring to my life.",
    imageSrc: "path/to/sarah-johnson-img.jpg",
   },
  {
    name: "John Smith",
    date: "September 5, 2023",
    review:
      "The service provided by this food bank is nothing short of amazing! I've been struggling to collect groceries for my family due to my mobility challenges. Thanks to their delivery service and the incredible volunteers, we now receive a wonderful assortment of food right at our doorstep. The option to have the package packed for us is an added convenience that makes a huge difference. Thank you for helping us during these tough times!",
  },
  {
    name: "Emma Thompson",
    date: "July 22, 2023",
    review:
      "I'm so grateful for the compassionate service offered by this food bank. Being unable to collect groceries myself, I was feeling quite isolated. However, their delivery and packing services have changed everything for me. The volunteers are incredibly friendly, and the food packages are filled with a wide variety of nutritious items. The care they show really brightens my day and helps me feel connected to the community. Thank you for the invaluable support!",
  },
  {
    name: "David Lee",
    date: "October 3, 2023",
    review:
      "This food bank is a lifeline for people like me who have difficulty leaving home. The delivery service is prompt, and the volunteers are angels. The food packages are thoughtfully put together, and it's evident that they prioritize the needs of individuals like me. The option to have the package packed by them takes away so much stress. My heartfelt appreciation to the entire team for making a positive impact on our lives!",
  },
  {
    name: "Linda Martinez",
    date: "June 17, 2023",
    review:
      "I couldn't ask for a better food bank service! The delivery and packing options are a godsend for someone like me, juggling multiple responsibilities. The volunteers are not only courteous but also take the time to check in on how we're doing. The food packages are filled with love and care, and it's evident that this organization truly cares about the community. A big thank you to everyone involved in making this happen!",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Function to switch to the next testimonial every 8 seconds
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Calculate the next two testimonials for the slideshow
  const nextTestimonial1 = (currentTestimonial + 1) % testimonials.length;
  const nextTestimonial2 = (currentTestimonial + 2) % testimonials.length;

  return (
    <div className="testimonials-wrapper">
      <h1 className="testimonials-title">Testimonials</h1>
      <div
        className="testimonials-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="testimonials-container">
        <AnimatePresence initial={false}>
          <motion.div
            className="testimonial-card"
            key={currentTestimonial}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="testimonial-name">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="testimonial-date">
              {testimonials[currentTestimonial].date}
            </div>
            <div className="testimonial-review">
              {testimonials[currentTestimonial].review}
            </div>
          </motion.div>
          <motion.div
            className="testimonial-card"
            key={nextTestimonial1}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="testimonial-name">
              {testimonials[nextTestimonial1].name}
            </div>
            <div className="testimonial-date">
              {testimonials[nextTestimonial1].date}
            </div>
            <div className="testimonial-review">
              {testimonials[nextTestimonial1].review}
            </div>
          </motion.div>
          <motion.div
            className="testimonial-card"
            key={nextTestimonial2}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            <div className="testimonial-name">
              {testimonials[nextTestimonial2].name}
            </div>
            <div className="testimonial-date">
              {testimonials[nextTestimonial2].date}
            </div>
            <div className="testimonial-review">
              {testimonials[nextTestimonial2].review}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;




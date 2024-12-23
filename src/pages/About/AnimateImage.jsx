import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

const AnimateImage = () => {
  // Image data array
  const images = [
    {
      src: "/assets/krishna3.webp",
      alt: "From Left 1",
      style: { top: "25%", left: "10%" },
      animation: { translateX: [-200, 0], translateY: [50, 0], opacity: [0, 1] },
      delay: 0,
    },
    {
      src: "/assets/krishna2.webp",
      alt: "From Left 2",
      style: {
        top: "50%",
        left: "10%",
        marginTop: "10%",
      },
      animation: { translateX: [-200, 0], translateY: [50, 0], opacity: [0, 1] },
      delay: 300,
    },
    {
      src: "/assets/krishna1.webp",
      alt: "Centered Image",
      style: {
        top: "60%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
      },
      animation: { translateY: [200, 0], opacity: [0, 1] },
      delay: 600,
    },
    {
      src: "/assets/krishna1.webp",
      alt: "From Right 1",
      style: { top: "25%", right: "10%" },
      animation: { translateX: [200, 0], translateY: [50, 0], opacity: [0, 1] },
      delay: 900,
    },
    {
      src: "/assets/krishna2.webp",
      alt: "From Right 2",
      style: {
        top: "50%",
        right: "10%",
        marginTop: "10%",
      },
      animation: { translateX: [200, 0], translateY: [50, 0], opacity: [0, 1] },
      delay: 1200,
    },
  ];

  // Reference for the container
  const containerRef = useRef(null);

  // IntersectionObserver to detect when the section is in view
  // State to track if animation has been triggered
  const [hasAnimated, setHasAnimated] = useState(false);

  // IntersectionObserver to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true); // Mark animation as triggered
            const elements = containerRef.current.querySelectorAll(".animated-image");
            elements.forEach((el, index) => {
              const { animation, delay } = images[index];
              anime({
                targets: el,
                ...animation,
                delay,
                duration: 1000,
                easing: "easeOutQuad",
              });
            });
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]); // Re-run the observer only if the animation has not triggered

  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center h-screen relative"
    >
      {images.map(({ src, alt, style }, index) => (
        <img
          key={index}
          src={src}
          alt={alt}
          className={`animated-image absolute rounded-md w-28 h-40 sm:w-36 sm:h-44 md:w-48 md:h-52 lg:w-56 lg:h-72 ${index === 2 ? "hidden lg:block" : ""}`}
          style={style}
        />
      ))}
    </div>
  );
};

export default AnimateImage;

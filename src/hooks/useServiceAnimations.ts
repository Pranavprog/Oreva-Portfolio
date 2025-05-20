
import { Variants } from 'framer-motion';

export const useServiceAnimations = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
        delayChildren: 0,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0, rotateY: -20, rotateX: 15, z: -50 },
    visible: {
      y: 0,
      opacity: 1,
      rotateY: 0,
      rotateX: 0,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.08,
      rotateY: 8,
      rotateX: -6,
      z: 30,
      boxShadow: "0px 20px 40px hsla(var(--primary), 0.5)",
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
    tap: {
      scale: 0.96,
      rotateY: 0,
      rotateX: 0,
      z: 10,
      boxShadow: "0px 10px 20px hsla(var(--primary), 0.3)",
      transition: { type: "spring", stiffness: 350, damping: 10 },
    },
  };

  const iconContainerVariants: Variants = {
    initial: { scale: 1, rotateY: 0, rotateZ: 0 },
    hover: {
      scale: 1.25,
      rotateY: 25,
      rotateZ: -8,
      filter: "drop-shadow(0 0 12px hsl(var(--primary))) drop-shadow(0 0 6px hsla(var(--primary), 0.7))",
      transition: { yoyo: Infinity, duration: 1.0, type: "spring", stiffness: 180, damping: 12 },
    },
  };

  const serviceTitleVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.1 } },
    hover: { y: -8, x: 3, scale: 1.03, color: "hsl(var(--primary))", transition: { type: "spring", stiffness: 250, damping: 12 } },
  };

  const serviceDescriptionVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 15, delay: 0.2 } },
    hover: { y: 6, x: -3, transition: { type: "spring", stiffness: 250, damping: 12 } },
  };

  return {
    containerVariants,
    cardVariants,
    iconContainerVariants,
    serviceTitleVariants,
    serviceDescriptionVariants,
  };
};


import React from 'react';
import { motion, Variants } from 'framer-motion';
import { DialogTrigger } from "@/components/ui/dialog";
import { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
  cardVariants: Variants;
  iconContainerVariants: Variants;
  serviceTitleVariants: Variants;
  serviceDescriptionVariants: Variants;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service, 
  onClick,
  cardVariants,
  iconContainerVariants,
  serviceTitleVariants,
  serviceDescriptionVariants
}) => {
  return (
    <DialogTrigger asChild onClick={onClick}>
      <motion.div
        className="service-card solid-dark-card rounded-xl p-8 text-left cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        variants={cardVariants}
        whileHover="hover"
        whileTap="tap"
        // initial="hidden" // initial is handled by parent container
        // animate="visible" // animate is handled by parent container
      >
        <motion.div
          className="mb-5 inline-block"
          variants={iconContainerVariants}
          initial="initial" // Use initial for icon specific states not tied to card's hidden/visible
          // Animate to hover state will be handled by whileHover on parent
        >
          {service.icon}
        </motion.div>
        <motion.h3
          className="text-xl font-semibold text-white mb-3"
          variants={serviceTitleVariants}
          // initial="initial" // Use variants' own initial if different from card visibility
          // animate="visible"
        >
          {service.title}
        </motion.h3>
        <motion.p
          className="text-gray-400 text-sm leading-relaxed"
          variants={serviceDescriptionVariants}
          // initial="initial"
          // animate="visible"
        >
          {service.description}
        </motion.p>

        <motion.div
          className="absolute -bottom-1 -right-1 w-20 h-20 opacity-20"
          style={{
            background: "linear-gradient(135deg, transparent, rgba(163, 230, 53, 0.3))",
            borderRadius: "50%",
            filter: "blur(8px)",
          }}
          initial={{ z: -20, opacity: 0.1 }}
          animate={{ z: -10, opacity: 0.2 }} // This could be part of cardVariants.visible if desired
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{
                opacity: 0,
                scale: 0.5,
                z: Math.random() * 40 - 20,
              }}
              animate={{ // This animation should likely be part of cardVariants.visible or a continuous animation
                opacity: [0, 0.3, 0.3, 0],
                scale: [0.5, 1, 0.5],
                x: Math.random() * 60 - 30,
                y: Math.random() * 60 - 30,
                z: Math.random() * 50 - 25,
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "mirror",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>
    </DialogTrigger>
  );
};

export default ServiceCard;


import React from 'react';
import { motion } from 'framer-motion';
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Service } from '@/types/service';

interface ServiceDialogContentProps {
  service: Service;
}

const ServiceDialogContent: React.FC<ServiceDialogContentProps> = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <DialogHeader>
        <div className="flex items-center mb-4">
          <motion.div
            className="mr-4 text-primary"
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
          </motion.div>
          <DialogTitle className="text-2xl font-bold text-white">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {service.title}
            </motion.span>
          </DialogTitle>
        </div>
        <DialogDescription className="text-gray-300 text-sm text-left whitespace-pre-line leading-relaxed pt-2 max-h-[60vh] overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {service.detailedDescription}
          </motion.div>
        </DialogDescription>
      </DialogHeader>
    </motion.div>
  );
};

export default ServiceDialogContent;

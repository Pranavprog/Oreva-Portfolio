import React, { useState } from 'react';
import { X, Award, Globe, Trophy, Lightbulb, FileCheck, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  year: string;
}

const achievements: Achievement[] = [
  {
    icon: <Award size={28} />,
    title: "RRP Award 2026",
    description: "Recognition for research & innovation excellence.",
    detail: "Received the prestigious RRP Award in 2026 for outstanding contributions to research, recognizing innovative thinking and impactful project outcomes in the technology domain.",
    year: "2026",
  },
  {
    icon: <Globe size={28} />,
    title: "Represented India",
    description: "Represented India at an international event.",
    detail: "Selected to represent India on a global stage at an international technology and innovation summit, showcasing cutting-edge projects and fostering cross-border collaborations.",
    year: "2025",
  },
  {
    icon: <Trophy size={28} />,
    title: "1st Place — IISc Bangalore",
    description: "Won first place at IISc Bangalore competition.",
    detail: "Secured 1st place at a prestigious competition hosted by the Indian Institute of Science, Bangalore, competing against top engineering talent from across the country.",
    year: "2025",
  },
  {
    icon: <Trophy size={28} />,
    title: "1st Place — Flip the Case",
    description: "Won the Flip the Case challenge.",
    detail: "Emerged as the winner in the 'Flip the Case' challenge, demonstrating exceptional problem-solving skills, strategic thinking, and the ability to deliver under pressure.",
    year: "2025",
  },
  {
    icon: <Star size={28} />,
    title: "Finalist — IIT Madras",
    description: "Reached the finals at IIT Madras event.",
    detail: "Qualified as a finalist in a national-level competition at IIT Madras, competing with the brightest minds and presenting innovative solutions to real-world challenges.",
    year: "2024",
  },
  {
    icon: <Trophy size={28} />,
    title: "3rd Place — IIT Bombay",
    description: "Secured 3rd place at IIT Bombay.",
    detail: "Achieved 3rd place at a highly competitive event at IIT Bombay, showcasing technical expertise and creative innovation among hundreds of participants.",
    year: "2024",
  },
  {
    icon: <FileCheck size={28} />,
    title: "5× Patent Holder",
    description: "Filed and holds 5 patents in technology.",
    detail: "Holds 5 patents across domains including IoT, AI, and embedded systems, reflecting a strong track record of developing novel, patentable innovations with real-world applications.",
    year: "2024",
  },
  {
    icon: <Lightbulb size={28} />,
    title: "Innovation Incubation",
    description: "Received incubation support for innovation.",
    detail: "Secured innovation incubation support from a leading institution, gaining mentorship, funding, and resources to develop and scale a technology startup idea from concept to prototype.",
    year: "2024",
  },
];

const HEX_WIDTH = 200;
const HEX_HEIGHT = HEX_WIDTH * 1.1547; // ratio for regular hexagon (2/√3)

const Achievements: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  // Calculate honeycomb positions for desktop
  const getHexPositions = (count: number) => {
    const cols = 4;
    const xStep = HEX_WIDTH * 0.88;
    const yStep = HEX_HEIGHT * 0.75;
    return Array.from({ length: count }, (_, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;
      const offsetX = row % 2 !== 0 ? xStep / 2 : 0;
      return { x: col * xStep + offsetX, y: row * yStep };
    });
  };

  const positions = getHexPositions(achievements.length);
  const maxX = Math.max(...positions.map(p => p.x)) + HEX_WIDTH;
  const maxY = Math.max(...positions.map(p => p.y)) + HEX_HEIGHT;

  return (
    <section id="achievements" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto" ref={sectionRef}>
        <motion.p
          className="section-title-pretext justify-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary text-2xl mr-2 animate-pulse-glow">*</span> RECOGNITION & AWARDS
        </motion.p>
        <motion.h2
          className="section-title !text-3xl md:!text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          ACHIEVEMENTS
        </motion.h2>

        {/* Desktop honeycomb grid */}
        <div className="hidden md:flex justify-center">
          <div className="relative" style={{ width: maxX, height: maxY }}>
            {achievements.map((a, i) => {
              const pos = positions[i];
              return (
                <motion.div
                  key={i}
                  className="absolute cursor-pointer group/hex"
                  style={{ left: pos.x, top: pos.y, width: HEX_WIDTH, height: HEX_HEIGHT }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div
                    className="w-full h-full transition-all duration-300 group-hover/hex:scale-110 group-hover/hex:-translate-y-1"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    {/* Glow border layer */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-primary/40 opacity-0 group-hover/hex:opacity-100 transition-opacity duration-300"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    />
                    {/* Inner content */}
                    <div
                      className="absolute inset-[3px] bg-card/80 backdrop-blur-md flex flex-col items-center justify-center text-center px-4 py-6 transition-shadow duration-300 group-hover/hex:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.3)]"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <div className="text-primary mb-1">{a.icon}</div>
                      <h3 className="text-xs font-heading font-semibold text-foreground leading-tight mb-0.5 px-1">{a.title}</h3>
                      <span className="text-[9px] text-muted-foreground tracking-widest">{a.year}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical stack of hexagons */}
        <div className="flex md:hidden flex-col items-center gap-4">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className="cursor-pointer group/hex"
              style={{ width: 180, height: 180 * 1.1547 }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div
                className="w-full h-full relative transition-all duration-300 group-hover/hex:scale-105"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />
                <div
                  className="absolute inset-[3px] bg-card/80 backdrop-blur-md flex flex-col items-center justify-center text-center px-4"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <div className="text-primary mb-1">{a.icon}</div>
                  <h3 className="text-xs font-heading font-semibold text-foreground leading-tight mb-0.5">{a.title}</h3>
                  <p className="text-[9px] text-muted-foreground">{a.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Book-open detail overlay */}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/70 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenIndex(null)}
            >
              <motion.div
                className="relative w-full max-w-lg origin-left"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                style={{ perspective: 1200 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rounded-2xl border border-border bg-card p-8 shadow-[0_20px_60px_-12px_hsl(var(--primary)/0.2)]">
                  <button
                    onClick={() => setOpenIndex(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-border transition-colors"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center text-primary border border-primary/30">
                      {achievements[openIndex].icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-foreground">{achievements[openIndex].title}</h3>
                      <span className="text-xs text-muted-foreground tracking-widest">{achievements[openIndex].year}</span>
                    </div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-5" />

                  <motion.p
                    className="text-muted-foreground leading-relaxed text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {achievements[openIndex].detail}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Achievements;

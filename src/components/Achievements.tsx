import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Award, Globe, Trophy, Lightbulb, FileCheck, Star } from 'lucide-react';
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

const Achievements: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener('scroll', updateScrollButtons);
    return () => el.removeEventListener('scroll', updateScrollButtons);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || openIndex !== null) return;
    let direction = 1;
    const interval = setInterval(() => {
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 5) direction = -1;
      if (el.scrollLeft <= 5) direction = 1;
      el.scrollBy({ left: direction * 1, behavior: 'auto' });
    }, 30);
    return () => clearInterval(interval);
  }, [openIndex]);

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

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

        {/* Scroll container */}
        <div className="relative group">
          {/* Nav arrows */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-primary transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-primary transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 px-2 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-[280px] cursor-pointer perspective-[1200px]"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="relative rounded-xl border border-border bg-card/60 backdrop-blur-md p-0 h-[340px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.25)] hover:border-primary/40 group/card overflow-hidden"
                >
                  {/* Gradient glow top */}
                  <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Image placeholder */}
                  <div className="w-full h-[120px] bg-muted flex items-center justify-center text-primary shrink-0">
                    <div className="flex flex-col items-center gap-1">
                      {a.icon}
                      <span className="text-[10px] text-muted-foreground tracking-wider">IMAGE</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center flex-1 px-5 py-4">
                    <span className="text-xs font-medium text-muted-foreground mb-1 tracking-widest">{a.year}</span>
                    <h3 className="text-base font-heading font-semibold text-foreground mb-1.5 leading-tight">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                    <span className="mt-3 text-xs text-primary/70 tracking-wide">Click to read more</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                  {/* Close */}
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

                  {/* Divider */}
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

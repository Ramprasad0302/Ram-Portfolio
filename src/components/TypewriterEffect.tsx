import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const skills = ["AI & Machine Learning", "Full-Stack Development", "IoT Solutions"];

export function TypewriterEffect() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const skill = skills[currentSkillIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < skill.length) {
          setCurrentText(skill.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentSkillIndex]);

  return (
    <div className="h-12 flex items-center">
      <motion.p
        className="text-2xl md:text-3xl font-semibold text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {currentText}
        <span className="animate-pulse">|</span>
      </motion.p>
    </div>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Download, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const certifications = [
    {
      name: "Infosys Data Science Certificate",
      url: "https://www.linkedin.com/posts/ram-prasad-16b0b119b_datascience-learningjourney-professionaldevelopment-activity-7342612667179667456-x84X?utm_source=share&utm_medium=member_desktop"
    },
    {
      name: "Infosys Java Certificate",
      url: "https://www.linkedin.com/posts/ram-prasad-16b0b119b_java-upskilling-careergrowth-activity-7342787412051300353-4YpU?utm_source=share&utm_medium=member_desktop"
    },
    {
      name: "Infosys Introduction to Artificial Intelligence Certificate",
      url: "https://www.linkedin.com/posts/ram-prasad-16b0b119b_introduction-to-artificial-intelligence-activity-7398036876785528832-BALl?utm_source=share&utm_medium=member_desktop"
    },
    {
      name: "Infosys Database Management Certificate",
      url: "https://www.linkedin.com/posts/ram-prasad-16b0b119b_database-management-activity-7398037637376299009-XiU4?utm_source=share&utm_medium=member_desktop"
    },
    {
      name: "Deloitte Data Analytics Certificate",
      url: "https://www.linkedin.com/posts/ram-prasad-16b0b119b_forage-certificate-activity-7342600558920286208-iCqD?utm_source=share&utm_medium=member_desktop"
    },
    {
      name: "Deloitte Technology Job Simulation Certificate",
      url: "https://www.linkedin.com/posts/ram-prasad-16b0b119b_forage-certificate-activity-7345106265246744576-SoKw?utm_source=share&utm_medium=member_desktop"
    },
    {
      name: "Deloitte Cyber Job Simulation Certificate",
      url: "https://www.linkedin.com/posts/ram-prasad-16b0b119b_forage-certificate-activity-7345106669938331650-gS3-?utm_source=share&utm_medium=member_desktop"
    },
  ];

  return (
    <section id="about" className="py-20 px-4 relative" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Building innovative solutions with AI, Full-Stack Development, and IoT
          </p>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          <Card className="glass p-8 mb-8">
            <p className="text-lg leading-relaxed text-foreground/90">
              Motivated and enthusiastic Computer Science Engineering graduate with a strong foundation in programming, AI, IoT, and data science. Adept at learning new technologies rapidly and applying them effectively. Possess hands-on experience through academic projects, with certifications in data science and Java from Infosys. Eager to contribute to innovative projects in the CSE department, bringing strong problem-solving skills, technical knowledge, and a passion for learning.
            </p>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80 }}
          >
            <Card className="glass p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-2">
                  <h4 className="font-semibold text-lg">B.Tech - Computer Science Engineering</h4>
                  <p className="text-muted-foreground">Dr. MGR Educational and Research Institute</p>
                  <p className="text-primary font-semibold">CGPA: 7.5</p>
                </div>
                
                <div className="border-l-2 border-accent pl-4 py-2">
                  <h4 className="font-semibold">Intermediate</h4>
                  <p className="text-muted-foreground">Narayana Jr College, Tanuku</p>
                  <p className="text-accent font-semibold">CGPA: 7.0</p>
                </div>
                
                <div className="border-l-2 border-accent pl-4 py-2">
                  <h4 className="font-semibold">Secondary School</h4>
                  <p className="text-muted-foreground">Montessori School, Tanuku</p>
                  <p className="text-accent font-semibold">CGPA: 9.7</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mt-6 glass border-primary/50"
                asChild
              >
                <a href="/resume.pdf" download="Ram_Prasad_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Resume
                </a>
              </Button>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
          >
            <Card className="glass p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent mt-2 group-hover:scale-150 transition-transform" />
                      <p className="text-foreground/90 leading-relaxed group-hover:text-primary transition-colors">{cert.name}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

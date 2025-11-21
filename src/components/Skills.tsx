import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code, Brain, Boxes, Database, Cloud, FileSpreadsheet } from "lucide-react";

const skills = [
  {
    category: "Full-Stack Development",
    icon: Code,
    items: [
      { name: "Java Full Stack", level: 85 },
      { name: "React & TypeScript", level: 80 },
      { name: "Supabase", level: 75 },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    items: [
      { name: "AI Prompting", level: 90 },
      { name: "Machine Learning", level: 75 },
      { name: "Data Science", level: 80 },
    ],
  },
  {
    category: "IoT & Hardware",
    icon: Boxes,
    items: [
      { name: "IoT Development", level: 80 },
      { name: "Hardware Integration", level: 75 },
      { name: "Sensor Systems", level: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Cloud,
    items: [
      { name: "MS Office Suite", level: 85 },
      { name: "Lovable Platform", level: 90 },
      { name: "Cloud Services", level: 75 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="py-20 px-4 relative" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * groupIndex }}
              >
                <Card className="glass p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{skillGroup.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + groupIndex * 0.1 + skillIndex * 0.1,
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1,
                              delay: 0.3 + groupIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Current Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="glass p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Database className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">Currently Learning</h3>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Java Full Stack Development at{" "}
              <span className="text-primary font-semibold">KodNest Training Institute</span>
              , Bangalore
            </p>
            <p className="text-sm text-muted-foreground">
              Gaining hands-on experience with modern web technologies and enterprise-level development practices
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

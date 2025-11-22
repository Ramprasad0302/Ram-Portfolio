import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Brain, Network, Smartphone, Car } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const primaryProjects = [
  {
    title: "Gen Z AI Hub",
    description: "A one-step solution platform designed with a vibrant, Gen Z-friendly UI. Built using modern web technologies with real-time data handling, user authentication, and secure cloud storage.",
    tech: ["React", "TypeScript", "Supabase", "Lovable", "Cloud Storage"],
    role: "Full-Stack Developer",
    link: "https://gen-z-ai-hub.lovable.app",
    icon: Smartphone,
    gradient: "from-primary to-accent",
  },
  {
    title: "The Innovation Hub",
    description: "A collaborative platform fostering innovation and creativity. Features real-time collaboration tools, project management, and community engagement features.",
    tech: ["React", "TypeScript", "Real-time APIs", "Modern UI/UX"],
    role: "Frontend Developer",
    link: "https://the-innovation-hub.lovable.app",
    icon: Network,
    gradient: "from-accent to-cta",
  },
];

const academicProjects = [
  {
    title: "Student Live Behaviour using AI",
    description: "An AI-powered system that analyzes student behavior through image processing. Collects and processes student images to provide behavioral insights and patterns.",
    tech: ["AI", "Machine Learning", "Image Processing", "Python"],
    icon: Brain,
  },
  {
    title: "Traffic Control System using IoT",
    description: "Emergency response IoT system that automatically detects accidents and shares location data with nearby hospitals and police stations. Cost-effective solution for faster emergency response.",
    tech: ["IoT", "GPS", "Emergency Systems", "Hardware Integration"],
    icon: Car,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedProject, setSelectedProject] = useState<typeof primaryProjects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-4 relative" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Building innovative solutions across AI, Full-Stack, and IoT domains
          </p>
        </motion.div>

        {/* Primary Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {primaryProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card className="glass-enhanced p-6 h-full group hover:scale-[1.02] transition-all duration-300 cursor-pointer relative overflow-hidden holographic">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="glass"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-primary mb-2">Role: {project.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full glass border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full glass border-primary/50 group-hover:border-primary group-hover:glow"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Case Study
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Academic <span className="text-gradient">Projects</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {academicProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="glass-enhanced p-5 hover:border-accent/50 transition-all group holographic">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 group-hover:text-accent transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-xs rounded-md bg-accent/10 text-accent"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-enhanced max-w-2xl holographic">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Overview</h4>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">My Role</h4>
                <p className="text-muted-foreground">{selectedProject.role}</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full glass border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                className="w-full glow-cta"
                asChild
              >
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Live Project
                </a>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

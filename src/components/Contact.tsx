import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ramprasaddola2@gmail.com",
    href: "mailto:ramprasaddola2@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9505582333",
    href: "tel:+919505582333",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tanuku, West Godavari, Andhra Pradesh - 534211",
    href: null,
  },
];

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ram-prasad-16b0b119b/",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Ramprasad0302",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/starboyy_46?igsh=MWI2ZGFrYzVtZTdheQ==",
    gradient: "from-pink-500 to-purple-600",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-4 relative" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-4 h-auto p-4 glass border-primary/30 hover:border-primary group"
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <span className="font-medium">{social.label}</span>
                        </a>
                      </Button>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <p className="text-sm text-center text-muted-foreground">
                  Open to opportunities in AI, Full-Stack Development, and IoT
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Card className="glass p-8 inline-block">
            <p className="text-lg mb-4">
              Ready to work together?
            </p>
            <Button
              size="lg"
              className="glow-cta"
              asChild
            >
              <a href="mailto:ramprasaddola2@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

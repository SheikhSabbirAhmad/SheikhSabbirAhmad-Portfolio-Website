import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { FaLaptopCode } from "react-icons/fa";
import { ImFileOpenoffice } from "react-icons/im";

const timeline = [
  {
    icon: Code2,
    title: "Complete Web Development",
    org: "Programming Hero",
    period: "Bootcamp",
    desc: "Completed an intensive full-stack bootcamp where I built multiple projects using the MERN stack, focusing on modern web development practices and real-world application structure.",
  },
  {
    icon: FaLaptopCode,
    title: "Frontend Development & UI Implementation",
    org: "Practice & Projects",
    period: "Hands-on Experience",
    desc: "Built responsive and interactive user interfaces using React.js and Next.js, converting design concepts into pixel-perfect web applications while focusing on performance and user experience.",
  },
  {
    icon: ImFileOpenoffice,
    title: "Personal Projects & Practice",
    org: "Self Learning",
    period: "Ongoing",
    desc: "Continuously building and improving personal and academic projects using modern technologies to strengthen problem-solving skills and develop scalable, production-ready applications.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative pt-24 lg:pt-4 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle num="About" title="Me" />

        <div className="grid md:grid-cols-5 gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg"
          >
            <p>
              I’m a passionate{" "}
              <span className="text-neon">
                MERN Stack Developer
              </span>{" "}
              focused on building modern, responsive, and user-friendly web
              applications. I enjoy turning ideas into real-world digital
              products using clean and efficient code.
            </p>

            <p>
              My core skills include{" "}
              <span className="text-neon">
                React.js, Next.js, MongoDB, Express.js, and Node.js
              </span>
              . I enjoy working on both frontend and backend, creating smooth
              user experiences and functional systems.
            </p>

            <p>
              I am continuously building my skills through hands-on projects and
              practice, focusing on developing scalable web applications and
              improving performance. I enjoy solving real-world problems and
              learning new technologies.
            </p>

            <p>
              My goal is to become a highly skilled developer by consistently
              improving my{" "}
              <span className="text-neon">development skills</span> and building
              impactful digital solutions.
            </p>
          </motion.div>

          {/* RIGHT SIDE TIMELINE */}
          <div className="md:col-span-2 relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-neon via-neon/40 to-transparent" />

            <div className="space-y-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-14"
                >
                  <span className="absolute left-0 top-0 w-10 h-10 rounded-full border border-neon bg-background flex items-center justify-center shadow-neon-sm">
                    <t.icon size={18} className="text-neon" />
                  </span>

                  <p className="font-mono text-xs text-neon uppercase tracking-wider">
                    {t.period}
                  </p>

                  <h3 className="font-bold text-lg mt-1">{t.title}</h3>

                  <p className="text-sm text-muted-foreground">{t.org}</p>

                  <p className="text-sm text-muted-foreground/80 mt-2">
                    {t.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
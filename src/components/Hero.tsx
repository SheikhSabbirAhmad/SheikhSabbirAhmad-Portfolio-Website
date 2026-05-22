import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import HeroImg from "./assets/My-Img2.png";
import "../components/css/style.module.css";

const ROLES = [
  "Full Stack Web Developer",
  "CSE Student",
  "Web Specialist",
  "Frontend Performance Specialist",
  "Next.js Developer",
];

function useTyping(words: string[], speed = 80, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];

    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));

          if (text.length + 1 === word.length) {
            setTimeout(() => setDel(true), pause);
          }
        } else {
          setText(word.slice(0, text.length - 1));

          if (text.length - 1 === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed
    );

    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-24 md:gap-16 items-center">
          
          {/* LEFT SIDE */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight"
            >
              Sheikh Sabbir Ahmad
            </motion.h1>

            <motion.div className="mt-8 text-2xl sm:text-3xl font-mono">
              <span className="text-neon">{typed}</span>
              <span className="inline-block w-[3px] h-7 bg-neon ml-1 animate-pulse" />
            </motion.div>

            <motion.p className="mt-6 text-muted-foreground">
              Building responsive, pixel-perfect interfaces and scalable web applications.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1Exg2Ghvpt8sNOJfGvDIQuqsNLpBE7FEM"
                className="bg-neon text-black px-7 py-4 rounded-md font-semibold"
              >
                <Download className="inline mr-2" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="border border-neon text-neon px-7 py-4 rounded-md"
              >
                Get in touch <ArrowRight className="inline ml-2" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center items-center">
            
            {/* Glow */}
            <div className="absolute w-[420px] h-[420px] bg-neon/20 blur-3xl rounded-full animate-pulse" />

            {/* Blob */}
            <div
              className="absolute w-[420px] h-[420px] bg-neon/10"
              style={{
                borderRadius: "58% 42% 65% 35% / 40% 45% 55% 60%",
                animation: "morph 8s ease-in-out infinite",
              }}
            />

            {/* IMAGE */}
            <div className="relative z-20">
              <img
                src={HeroImg.src}
                alt="Developer"
                className="
                  w-[350px]
                  h-auto
                  object-contain
                  select-none
                  pointer-events-none
                  drop-shadow-[0_0_40px_rgba(37,214,113,0.25)]
                  [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
                  [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
                "
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
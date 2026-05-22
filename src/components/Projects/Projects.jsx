"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaReact,
  FaNodeJs,
} from "react-icons/fa6";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ LOCAL IMAGES
import ProjectImg1 from "@/components/assets/projectImg1.PNG";
import ProjectImg3 from "@/components/assets/projectImg3.PNG";

const projects = [
  {
    img: ProjectImg1, // ✅ 1st project local image

    category: "WEB DEVELOPMENT",

    title: "DocAppoint-Doctor-Appointment-Manager",

    desc: "A full-stack doctor appointment booking platform that allows users to browse doctors, book appointments, and manage schedules with a smooth and user-friendly interface.",

    features: [
      "Responsive Design",
      "Smooth Animations",
      "Modern UI/UX",
      "Interactive Sections",
    ],

    tech: [
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <FaNodeJs key="node" />,
      <SiMongodb key="mongodb" />,
      <FaReact key="react" />,
    ],

    live: "https://doc-appoint-doctor-appointment-mana.vercel.app",

    github:
      "https://github.com/SheikhSabbirAhmad/DocAppoint-Doctor-Appointment-Manager",
  },

  {
    img: "https://i.ibb.co/SDFj9rXP/keen-keeper-05-10-2026-01-36-AM.png",

    category: "WEB DEVELOPMENT",

    title: "Keen Keeper",

    desc: "Modern task management web application with clean design and productivity-focused features.",

    features: [
      "Authentication System",
      "Responsive Dashboard",
      "Task Management",
      "Realtime Updates",
    ],

    tech: [
      <FaReact key="react" />,
      <SiFirebase key="firebase" />,
      <SiTailwindcss key="tailwind" />,
    ],

    live: "https://kin-keeper-drab.vercel.app",

    github: "https://github.com/SheikhSabbirAhmad/kin-keeper",
  },

  {
    img: ProjectImg3, // ✅ 3rd project local image

    category: "WEB DEVELOPMENT",

    title: "SunCart-Summer-Essentials-Store",

    desc: "An e-commerce web application for summer essential products, featuring a clean UI, product browsing, and a smooth shopping experience with a responsive and user-friendly design.",

    features: [
      "Product Listing",
      "Cart System",
      "Responsive Design",
      "Modern UI",
    ],

    tech: [
      <SiNextdotjs key="next" />,
      <SiTailwindcss key="tailwind" />,
      <FaNodeJs key="node" />,
      <SiMongodb key="mongodb" />,
      <FaReact key="react" />,
    ],

    live: "https://sun-cart-summer-essentials-store-xi.vercel.app",

    github:
      "https://github.com/SheikhSabbirAhmad/SunCart-Summer-Essentials-Store",
  },
];

const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-[-200px] h-full w-[400px] bg-gradient-to-r from-neon/10 via-neon/5 to-transparent blur-[100px] opacity-40" />
      <div className="absolute -bottom-40 -right-32 w-[700px] h-[700px] bg-neon/5 rounded-full blur-[120px] opacity-30" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,214,113,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,214,113,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-neon font-mono uppercase tracking-[4px] text-sm">
            Featured Work
          </p>

          <h2 className="mt-3 text-4xl md:text-6xl font-bold text-white">
            My <span className="text-neon glow-text">Projects</span>
          </h2>

          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of modern web applications, creative interfaces, and full-stack solutions.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative mt-20 px-2 lg:px-20 pb-20">
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-neon/40 bg-black/60 backdrop-blur-md text-neon flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-neon/40 bg-black/60 backdrop-blur-md text-neon flex items-center justify-center"
          >
            <FaChevronRight />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative overflow-hidden rounded-3xl border border-neon/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_30px_rgba(37,214,113,0.05)]"
                >
                  <div className="grid lg:grid-cols-2 items-center">

                    {/* IMAGE (LOCAL FIXED 1st + 3rd) */}
                    <div className="relative overflow-hidden h-full flex items-center justify-center">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={1000}
                        height={700}
                        className="
                          w-full
                          h-full
                          object-cover
                          object-center
                          select-none
                          pointer-events-none
                          transition-transform duration-700 group-hover:scale-105
                          [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
                          [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
                        "
                      />

                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="p-8 lg:p-12">
                      <p className="text-neon text-xs uppercase tracking-[4px] font-mono">
                        {project.category}
                      </p>

                      <h2 className="mt-4 text-4xl font-bold text-white">
                        {project.title}
                      </h2>

                      <p className="mt-5 text-muted-foreground leading-relaxed">
                        {project.desc}
                      </p>

                      <div className="mt-8 space-y-3">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-neon" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <div className="mt-10 flex items-center gap-5 text-3xl text-neon">
                        {project.tech.map((icon, i) => (
                          <div key={i}>{icon}</div>
                        ))}
                      </div>

                      <div className="mt-10 flex flex-wrap gap-4">
                        <a
                          href={project.live}
                          target="_blank"
                          className="bg-neon text-black px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                        >
                          Live Preview <FaArrowUpRightFromSquare />
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          className="border border-neon/30 text-neon px-6 py-3 rounded-xl flex items-center gap-2"
                        >
                          <FaGithub /> GitHub
                        </a>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
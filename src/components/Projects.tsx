import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Only Testing",
    description:
      "A comprehensive testing platform for web applications, offering a suite of tools for functional, performance, and accessibility testing.",
    tech: ["Angular", "Playwright", "Jenkins", "CI/CD"],
    liveLink: "https://testing-site-three.vercel.app/",
    repo: "https://github.com/mohan-shil/testing_site.git",
  },
  {
    title: "Simplify Investment",
    description:
      "A user-friendly investment platform that simplifies the process of managing and tracking investments, featuring a clean UI and robust backend.",
    tech: ["Angular", "Playwright", "Jenkins", "CI/CD"],
    liveLink: "https://simplify-investment.vercel.app/",
    repo: "https://github.com/mohan-shil/simplify-investment.git",
  },
  {
    title: "Automation Testing for Beginners",
    description:
      "A beginner-friendly automation testing project using Playwright and React, demonstrating the basics of test automation with a focus on user experience.",
    tech: ["Playwright", "React", "JavaScript", "Postman"],
    liveLink: "https://rahulshettyacademy.com/loginpagePractise/",
    repo: "https://github.com/mohan-shil/Automation_testing_for_beginners.git",
  },
  {
    title: "Test Automation Dashboard",
    description:
      "An interactive dashboard to visualize automation test results, CI/CD pipeline status, and real-time metrics using React, Chart.js, and Jenkins API.",
    tech: ["React", "Chart.js", "Jenkins", "CI/CD"],
    liveLink: "https://demo-automation-dashboard.netlify.app",
    repo: "https://github.com/yourusername/test-automation-dashboard",
  },
  {
    title: "E2E Test Framework",
    description:
      "Custom-built Playwright framework with integrated reporting, visual regression testing, and reusable components for scalable end-to-end tests.",
    tech: ["Playwright", "Node.js", "Jest", "TypeScript"],
    liveLink: "https://playwright-framework-demo.netlify.app",
    repo: "https://github.com/yourusername/e2e-framework",
  },
  {
    title: "Accessibility Checker Tool",
    description:
      "A lightweight a11y tool for checking WCAG violations in real-time across web pages, using Lighthouse and axe-core under the hood.",
    tech: ["Lighthouse", "React", "axe-core", "Vite"],
    liveLink: "https://a11y-checker-demo.netlify.app",
    repo: "https://github.com/yourusername/a11y-checker",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <div id="projects" className="bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800 text-white py-20 px-4 sm:px-10 min-h-screen">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-emerald-400 mb-12 text-center drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        My Projects 🚀
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-emerald-500/30 transition-all border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-emerald-600/20 text-emerald-200 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4 text-sm">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-emerald-400 hover:text-white flex items-center gap-1 transition"
              >
                <FaExternalLinkAlt />
                <span>Live</span>
              </button>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-white flex items-center gap-1 transition"
              >
                <FaGithub />
                <span>Code</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl h-[80vh] bg-gray-950 rounded-xl overflow-hidden shadow-2xl border border-emerald-500"
            >
              <button
                className="absolute top-3 right-4 text-emerald-300 hover:text-white text-2xl z-10"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              <iframe
                src={selectedProject.liveLink}
                title={selectedProject.title}
                className="w-full h-full border-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

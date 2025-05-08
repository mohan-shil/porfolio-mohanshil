import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
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
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-900 text-white py-20 px-4 sm:px-16">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-12 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
      >
        Projects 🚀
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-yellow-500/30 p-6 flex flex-col justify-between"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <div>
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-600/30 text-yellow-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-200 flex items-center space-x-1 text-sm"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-200 flex items-center space-x-1 text-sm"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import { motion } from "framer-motion";

const techIcons = [
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/typescript/3178C6",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  "https://cdn.simpleicons.org/cypress/17202C",
  "https://cdn.simpleicons.org/webdriverio/21CBD5",
  "https://cdn.simpleicons.org/postman/FF6C37",
  "https://cdn.simpleicons.org/jest/C21325",
  "https://cdn.simpleicons.org/jira/0052CC",
  "https://devicon-website.vercel.app/api/azure/original.svg",
  "https://cdn.simpleicons.org/docker/2496ED",
  "https://cdn.simpleicons.org/apachejmeter/009639",
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/redux/764ABC",
  "https://cdn.simpleicons.org/node.js/339933",
  "https://cdn.simpleicons.org/selenium/43B02A",
  "https://cdn.simpleicons.org/nextdotjs/000000",
  "https://cdn.simpleicons.org/cucumber/39A549",
  "https://cdn.simpleicons.org/html5/E34F26",
  "https://cdn.simpleicons.org/css3/1572B6",
  "https://cdn.simpleicons.org/tailwindcss/06B6D4",
];

const iconContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const iconItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const TechStack = () => {
  return (
    <div id="technology-stack" className="bg-gray-900 text-white py-16 px-6">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 mb-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        🛠️ Tech Stack & Tools
      </motion.h2>

      <motion.div
        className="flex flex-col items-center gap-10"
        variants={iconContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-wrap justify-center gap-6 sm:gap-4">
          {techIcons.map((src, index) => (
            <motion.div
              key={index}
              variants={iconItem}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="transition duration-300 ease-in-out"
            >
              <img
                src={src}
                alt={`Tech ${index}`}
                className="w-[52px] h-[52px] object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechStack;

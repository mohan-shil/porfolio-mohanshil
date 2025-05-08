import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Experience = () => {
  return (
    <div id="experience" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 sm:px-16">
      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-12 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
      >
        Experience <FaBriefcase className="inline-block ml-2 mb-1" />
      </motion.h2>

      {/* Timeline Container */}
      <div className="relative border-l-4 border-yellow-400 pl-6 space-y-16">
        {/* Each Experience Item */}
        {[
          {
            title: 'Eastern Group, Bangladesh — QA Engineer',
            time: 'JULY 2023 - AUGUST 2024',
            details:
              'Collaborated with SCRUM teams, maintained AQA structure, developed large-scale automation, generated proactive E2E tests, ran CI pipelines, evaluated a11y tests, and shared QA best practices.',
          },
          {
            title: 'Genex, Bangladesh — QA Engineer',
            time: 'FEBRUARY 2021 - JUNE 2023',
            details:
              'Handled test designs, process documentation, client communication, mentoring junior QAs, following security policies, and managing task completions under deadlines.',
          },
          {
            title: 'North South, Bangladesh — QA Engineer',
            time: 'APRIL 2019 - JANUARY 2021',
            details:
              'Led project QA, integrated workflows, handled team communication, managed sprint planning, and monitored testing performance metrics.',
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="relative bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-yellow-400/30 transition-shadow"
            custom={idx}
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
            <span className="absolute -left-9 top-2.5 w-5 h-5 bg-yellow-400 rounded-full shadow-md border-2 border-white" />
            <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-1">{item.title}</h3>
            <p className="text-sm text-gray-400 italic mb-2">{item.time}</p>
            <p className="text-gray-200">{item.details}</p>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-8 text-center">
          Education <FaGraduationCap className="inline-block ml-2 mb-1" />
        </h2>

        <div className="bg-gray-800 rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-yellow-300 mb-1">
            WSB University, Poland — Bachelors in Management Engineering
          </h3>
          <p className="text-sm text-gray-400 italic mb-2">JANUARY 2022 - PRESENT</p>
          <p className="text-gray-200">
            Gaining strong expertise in process optimization, project coordination, and data-driven decision-making—applying these to improve QA automation and strategic testing workflows.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;

import {
  FaJsSquare,
  FaNodeJs,
  FaGit,
  FaJenkins,
  FaDocker,
  FaDev,
  FaJira,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiPostman, SiMeteor } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="bg-gray-900 text-gray-200 p-4 sm:p-16" id="technology-stack">
      <h2 className="text-3xl font-bold mb-4 text-yellow-500">
        Technology Stack
      </h2>
      <div className="text-sm sm:text-lg leading-relaxed">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-2 sm:px-4 py-2">Category</th>
              <th className="px-2 sm:px-4 py-2">Technologies</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 sm:px-4 py-2">
                Programming Languages
              </td>
              <td className="border px-2 sm:px-4 py-2 flex items-center space-x-2">
                <FaJsSquare size={24} />
                <SiTypescript size={24} />
                <span>JavaScript/TypeScript</span>
              </td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-4 py-2">Testing</td>
              <td className="border px-2 sm:px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Playwright (Node.js)</li>
                  <li>Cypress (Node.js)</li>
                  <li>Webdriver (Node.js)</li>
                  <li>Lighthouse (Accessibility Testing Tool)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-4 py-2">Tools</td>
              <td className="border px-2 sm:px-4 py-2">
                <ul className="list-disc list-inside">
                  <li className="flex items-center space-x-2">
                    <FaGit size={24} />
                    <span>Git</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaJenkins size={24} />
                    <span>Jenkins</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaDatabase size={24} />
                    <span>Bash</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SiPostman size={24} />
                    <span>Postman</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaDocker size={24} />
                    <span>Docker</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaNodeJs size={24} />
                    <span>Azure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaDev size={24} />
                    <span>DevOps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaJira size={24} />
                    <span>Jira</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <SiMeteor size={24} />
                    <span>JMeter</span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechStack;

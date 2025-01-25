import React from "react";

const TechStack = () => {
  return (
    <div className="bg-gray-900 text-white p-8" id="technology-stack">
      <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
      <div className="text-lg leading-relaxed">
        <h3 className="text-2xl font-semibold mb-2">Programming Languages</h3>
        <p className="mb-4">JavaScript/TypeScript</p>

        <h3 className="text-2xl font-semibold mb-2">Testing</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Playwright (NodeJs)</li>
          <li>Cypress (NodeJs)</li>
          <li>Webdriver (NodeJs)</li>
          <li>Lighthouse (Accessibility Testing Tool)</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2">Tools</h3>
        <ul className="list-disc list-inside">
          <li>GIT</li>
          <li>JENKINS</li>
          <li>BASH</li>
          <li>POSTMAN</li>
          <li>DOCKER</li>
          <li>AZURE</li>
          <li>DEVOPS</li>
          <li>JIRA</li>
          <li>JMeter</li>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;

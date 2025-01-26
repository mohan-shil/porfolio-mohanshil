const TechStack = () => {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-16" id="technology-stack">
      <h2 className="text-3xl font-bold mb-4 text-yellow-500">Technology Stack</h2>
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
              <td className="border px-2 sm:px-4 py-2">Programming Languages</td>
              <td className="border px-2 sm:px-4 py-2">JavaScript/TypeScript</td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-4 py-2">Testing</td>
              <td className="border px-2 sm:px-4 py-2">
                <ul className="list-disc list-inside">
                  <li>Playwright (NodeJs)</li>
                  <li>Cypress (NodeJs)</li>
                  <li>Webdriver (NodeJs)</li>
                  <li>Lighthouse (Accessibility Testing Tool)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-4 py-2">Tools</td>
              <td className="border px-2 sm:px-4 py-2">
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechStack;

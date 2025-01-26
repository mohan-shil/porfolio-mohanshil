const Experience = () => {
  return (
    <div id="experience" className="bg-gray-900 text-white p-4 sm:p-16">
      <h2 className="text-3xl font-bold mb-4 text-yellow-500">Experience 🔬</h2>
      <div className="text-sm sm:text-lg leading-relaxed">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-2 sm:px-4 py-2">Position</th>
              <th className="px-2 sm:px-4 py-2">Duration</th>
              <th className="px-2 sm:px-4 py-2">Responsibilities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 sm:px-4 py-2">Eastern Group, Bangladesh— QA Engineer</td>
              <td className="border px-2 sm:px-4 py-2">JULY 2023 - AUGUST 2024</td>
              <td className="border px-2 sm:px-4 py-2">
                SCRUM team collaboration, maintaining AQA structure, maintaining a large-scale automation repository, generating E2E tests proactively, running pipelines regularly, pair programming, knowledge transfer, evaluating a11y tests periodically, gathering/discussing valuable test artifacts are some of my key responsibilities in this position.
              </td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-4 py-2">Genex, Bangladesh— QA Engineer</td>
              <td className="border px-2 sm:px-4 py-2">FEBRUARY 2021 - JUNE 2023</td>
              <td className="border px-2 sm:px-4 py-2">
                Security procedures, policy adherence, test design, mentoring, task completion, best practices, line management, staff evaluation, client communication, duties & time monitoring were some of my key responsibilities in this position.
              </td>
            </tr>
            <tr>
              <td className="border px-2 sm:px-4 py-2">North South, Bangladesh—QA Engineer</td>
              <td className="border px-2 sm:px-4 py-2">APRIL 2019 - JANUARY 2021</td>
              <td className="border px-2 sm:px-4 py-2">
                Project management, workflow integration, leadership, team management, communication, feedback, performance evaluation were some of my key responsibilities in this position.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-3xl font-bold mb-4 mt-8 text-yellow-500">Education 📚</h2>
        <h3 className="text-2xl font-semibold mb-2">
          WSB University, Poland— Management Engineering, Bachelors — Final Year
        </h3>
        <p className="mb-4">JANUARY 2022 - PRESENT</p>
        <p className="mb-4">
          Comprehensive knowledge in Management Engineering, emphasizing process optimization, project coordination, and data-driven decision-making to enhance QA automation strategies.
        </p>
      </div>
    </div>
  );
};

export default Experience;

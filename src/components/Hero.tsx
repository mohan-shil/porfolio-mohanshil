import logo from "../assets/logo.jpg";
import cv from "../assets/QA_CV.pdf";

const Hero = () => {
  return (
    <div
      className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center p-4 sm:p-8"
      id="home"
    >
      <img src={logo} alt="Logo" className="w-24 h-24 sm:w-32 sm:h-32 mb-4 rounded-full shadow-lg" />
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-center">Hi 👋🏽 I'm Mohan Shil</h1>
      <p className="text-xl sm:text-2xl mb-4 text-center">QA Engineer</p>
      <div className="max-w-xl text-center">
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          As a QA Automation Tester with three years of experience in testing
          web and mobile applications, I bring a strong foundation in TypeScript
          and JavaScript, along with expertise in test automation frameworks
          such as Playwright, WebdriverIO, and Cypress. My skill set extends to
          leveraging tools like GitHub Actions and encompasses a broad range of
          testing practices, including functional testing, mobile testing (iOS
          and Android), API testing, and game testing.
        </p>
        <a
          href={cv}
          download
          className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-2 px-4 rounded shadow-lg transition duration-300"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default Hero;

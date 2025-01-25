import logo from "../assets/logo.jpg";
import cv from "../assets/QA_CV.pdf";
const Hero = () => {
  return (
    <div
      className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center"
      id="home"
    >
      <img src={logo} alt="Logo" className="w-32 h-32 mb-4 rounded-full" />
      <h1 className="text-4xl font-bold mb-2">Hi 👋🏽 I'm Mohan Shil</h1>
      <p className="text-xl">QA Engineer</p>
      <br />
      <div className="max-w-2xl text-center">
        <p>
          As a QA Automation Tester with three years of experience in testing
          web and mobile applications, I bring a strong foundation in TypeScript
          and JavaScript, along with expertise in test automation frameworks
          such as Playwright, WebdriverIO, and Cypress. My skill set extends to
          leveraging tools like GitHub Actions and encompasses a broad range of
          testing practices, including functional testing, mobile testing (iOS
          and Android), API testing, and game testing.
        </p>
        <br />
        <a
          href={cv}
          download
          className="bg-yellow-500 hover:bg-yellow-700 text-gray-900 font-bold py-2 px-4 rounded"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default Hero;

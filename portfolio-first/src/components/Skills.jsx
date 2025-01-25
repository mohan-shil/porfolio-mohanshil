import React from "react";
import JS from "../assets/javascript.png";

export const Skills = () => {
  return (
    <div name="skills" className="bg-[#3c1053] text-gray-300 w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are some of my skills</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* card component */}
          <div className="shadow-md shadow-black-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="html icon" />
            <p className="my-4">JavaScript - Fundamentals</p>
          </div>

          {/* end of card component */}
          <div className="shadow-md shadow-black-900 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="html icon"
            />
            <p className="my-4">Google Suite</p>
          </div>
          <div className="shadow-md shadow-black-900 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg/1728px-Microsoft_Office_logo_%282013%E2%80%932019%29.svg.png"
              alt="postman"
            />
            <p className="my-4 ">Microsoft Office Suite</p>
          </div>
          <div className="shadow-md shadow-black-900 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png"
              alt="Jenkins"
            />
            <p className="my-4">English - Professional</p>
          </div>
          <div className="shadow-md shadow-black-900 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://cdn.iconscout.com/icon/free/png-256/free-jira-282222.png?f=webp"
              alt="html icon"
            />
            <p className="my-4">JIRA | Test Management Tool</p>
          </div>

          <div className="shadow-md shadow-black-900 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://w7.pngwing.com/pngs/882/180/png-transparent-test-automation-software-testing-manual-testing-selenium-others-angle-trademark-logo-thumbnail.png"
              alt="html icon"
            />
            <p className="my-4">Functional Testing</p>
          </div>

          <div className="shadow-md shadow-black-900 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://cdn.dribbble.com/users/1464433/screenshots/4128004/animated_svg_logo_-_typing_animation.gif"
              alt="html icon"
            />
            <p className="my-4">Typing 45 wpm</p>
          </div>

          <div className="shadow-md shadow-black-900 hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src="https://community.infoblox.com/t5/image/serverpage/image-id/2195iA290BF7E3BA6064D/image-size/large/is-moderation-mode/true?v=v2&px=999"
              alt="html icon"
            />
            <p className="my-4">BASH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

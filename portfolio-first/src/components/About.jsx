import React from "react";


function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#3c1053] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* container */}
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-8 grid sm:grid-cols-2 gap-8 ">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi. I am Mohan 👋🏽</p>
         
            <img
              src="https://media.giphy.com/media/5qZEZ0rTln9581K7Q5/giphy.gif"
              alt="Giphy"
              className="max-w-full"
            />
          </div>
          <div>
            <p>
              <br />
              <br />
              <br />A motivated and enthusiastic job seeker with a strong desire
              to learn and grow. Eager to contribute to a dynamic team and gain
              practical experience. Possesses excellent communication and
              interpersonal skills, focusing on delivering exceptional customer
              service. Committed to professionalism,reliability, and continuous
              self-improvement. Seeking an entry-level opportunity to kickstart
              a successful career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
